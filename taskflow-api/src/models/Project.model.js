const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Project name is required'],
      trim: true,
      minlength: [2, 'Name must be between 2 and 100 characters'],
      maxlength: [100, 'Name must be between 2 and 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [5, 'Description must be between 5 and 500 characters'],
      maxlength: [500, 'Description must be between 5 and 500 characters'],
    },
    status: {
      type: String,
      enum: {
        values: ['active', 'completed', 'on-hold'],
        message: 'Status must be active, completed, or on-hold',
      },
      default: 'active',
    },
    color: {
      type: String,
      default: '#3b82f6',
      trim: true,
    },
    dueDate: {
      type: String,
      default: null,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Project owner is required'],
    },
  },
  {
    timestamps: true,
  }
);

projectSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

projectSchema.virtual('ownerId').get(function () {
  if (!this.owner) return undefined;
  return this.owner._id ? this.owner._id.toHexString() : this.owner.toString();
});

projectSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

projectSchema.set('toObject', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
