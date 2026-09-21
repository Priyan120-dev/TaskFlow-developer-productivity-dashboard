require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/database');
const User = require('../models/User.model');
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

const seedData = async () => {
  try {
    await connectDB();
    console.log('Clearing existing TaskFlow database collections...');

    await Task.deleteMany({});
    await Project.deleteMany({});
    await User.deleteMany({});

    console.log('Existing collections cleared.');

    const user = await User.create({
      name: 'Alex Kumar',
      email: 'alex@taskflow.dev',
      password: 'password123',
      role: 'developer',
    });
    console.log(`Created user: ${user.name} (${user.email}) [ID: ${user._id}]`);

    const project1 = await Project.create({
      name: 'API Gateway Migration',
      description: 'Migrate legacy REST endpoints to unified API gateway with rate limiting and authentication.',
      status: 'active',
      color: '#3b82f6',
      dueDate: '2026-10-15',
      owner: user._id,
    });

    const project2 = await Project.create({
      name: 'Mobile App Redesign',
      description: 'Complete UI/UX overhaul of the mobile application with new design system.',
      status: 'active',
      color: '#8b5cf6',
      dueDate: '2026-11-30',
      owner: user._id,
    });

    const project3 = await Project.create({
      name: 'Cloud Infrastructure Setup',
      description: 'Set up AWS infrastructure with auto-scaling, monitoring, and CI/CD pipelines.',
      status: 'completed',
      color: '#10b981',
      dueDate: '2026-09-01',
      owner: user._id,
    });

    console.log(`Created 3 projects: ${project1.name}, ${project2.name}, ${project3.name}`);

    const tasks = await Task.create([
      {
        title: 'Set up API rate limiting middleware',
        description: 'Implement rate limiting using Redis for the API gateway.',
        status: 'done',
        priority: 'high',
        dueDate: '2026-09-20',
        project: project1._id,
        assignee: user._id,
        createdBy: user._id,
      },
      {
        title: 'Design new onboarding flow screens',
        description: 'Create Figma mockups for the redesigned onboarding experience.',
        status: 'in-progress',
        priority: 'high',
        dueDate: '2026-10-05',
        project: project2._id,
        assignee: user._id,
        createdBy: user._id,
      },
      {
        title: 'Write API authentication documentation',
        description: 'Document OAuth2 flow and JWT token management.',
        status: 'todo',
        priority: 'medium',
        dueDate: '2026-10-10',
        project: project1._id,
        assignee: user._id,
        createdBy: user._id,
      },
      {
        title: 'Configure CloudWatch monitoring',
        description: 'Set up CloudWatch dashboards and alerts for all services.',
        status: 'done',
        priority: 'medium',
        dueDate: '2026-08-25',
        project: project3._id,
        assignee: user._id,
        createdBy: user._id,
      },
      {
        title: 'Implement push notification service',
        description: 'Integrate Firebase Cloud Messaging for push notifications.',
        status: 'todo',
        priority: 'medium',
        dueDate: '2026-11-01',
        project: project2._id,
        assignee: user._id,
        createdBy: user._id,
      },
    ]);

    console.log(`Created ${tasks.length} tasks.`);
    console.log('Database seeding completed successfully!');
    console.log('--------------------------------------------------');
    console.log(`User: ${user.email} (Password: password123)`);
    console.log(`Projects: 3 seeded`);
    console.log(`Tasks: 5 seeded`);
    console.log('--------------------------------------------------');

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Database seeding failed:', error);
    if (mongoose.connection && mongoose.connection.readyState >= 1) {
      await mongoose.connection.close();
    }
    process.exit(1);
  }
};

seedData();
