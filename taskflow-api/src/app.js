const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const projectRoutes = require('./routes/project.routes');
const taskRoutes = require('./routes/task.routes');
const aiRoutes = require('./routes/ai.routes');
const errorHandler = require('./middleware/errorHandler');

// Connect to MongoDB database
connectDB();

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Request logger (development only)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(
      `${new Date().toISOString()} | ` +
      `${req.method} ${req.originalUrl}`
    );
    next();
  });
}

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'ok',
    message: 'TaskFlow API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    database: 'MongoDB Atlas',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      projects: '/api/projects',
      tasks: '/api/tasks',
      ai: '/api/ai',
    },
  });
});

// Stats overview
app.get('/api/stats', async (req, res) => {
  try {
    const User = require('./models/User.model');
    const Project = require('./models/Project.model');
    const Task = require('./models/Task.model');

    const [
      totalUsers,
      totalProjects,
      totalTasks,
      completedTasks,
      inProgressTasks,
      todoTasks,
      activeProjects,
      completedProjects,
    ] = await Promise.all([
      User.countDocuments(),
      Project.countDocuments(),
      Task.countDocuments(),
      Task.countDocuments({ status: 'done' }),
      Task.countDocuments({ status: 'in-progress' }),
      Task.countDocuments({ status: 'todo' }),
      Project.countDocuments({ status: 'active' }),
      Project.countDocuments({ status: 'completed' }),
    ]);

    res.status(200).json({
      success: true,
      data: {
        users: { total: totalUsers },
        projects: {
          total: totalProjects,
          active: activeProjects,
          completed: completedProjects,
        },
        tasks: {
          total: totalTasks,
          completed: completedTasks,
          inProgress: inProgressTasks,
          todo: todoTasks,
          completionRate: totalTasks > 0
            ? Math.round(
                (completedTasks / totalTasks) * 100
              )
            : 0,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch stats',
    });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/ai', aiRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

app.use(errorHandler);

module.exports = app;
