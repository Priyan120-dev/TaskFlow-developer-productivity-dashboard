const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [2, 'Title must be between 2 and 200 characters'],
      maxlength: [200, 'Title must be between 2 and 200 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
      default: '',
    },
    status: {
      type: String,
      enum: {
        values: ['todo', 'in-progress', 'done'],
        message: 'Status must be todo, in-progress, or done',
      },
      default: 'todo',
    },
    priority: {
      type: String,
      enum: {
        values: ['low', 'medium', 'high'],
        message: 'Priority must be low, medium, or high',
      },
      default: 'medium',
    },
    dueDate: {
      type: String,
      default: null,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: [true, 'Project reference is required'],
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

taskSchema.virtual('projectId').get(function () {
  if (!this.project) return undefined;
  return this.project._id ? this.project._id.toHexString() : this.project.toString();
});

taskSchema.virtual('assigneeId').get(function () {
  if (!this.assignee) return undefined;
  return this.assignee._id ? this.assignee._id.toHexString() : this.assignee.toString();
});

taskSchema.virtual('createdById').get(function () {
  if (!this.createdBy) return undefined;
  return this.createdBy._id ? this.createdBy._id.toHexString() : this.createdBy.toString();
});

taskSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

taskSchema.set('toObject', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
