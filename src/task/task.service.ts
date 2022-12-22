import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) { }
  create(task: Task): Promise<Task> {
    return this.taskModel.create(task);
  }
  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }
  async findById(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, task: Task): Promise<any> {
    return await this.taskModel.findByIdAndUpdate(id, task, {
      new: true,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.taskModel.findByIdAndRemove(id);
  }
  async deleteAll(): Promise<any> {
    return await this.taskModel.deleteMany()
  }
}
