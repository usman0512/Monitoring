import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskSubmitted, TaskSubmittedDocument } from 'src/schemas/task-submitted.schema';

@Injectable()
export class TaskSubmittedService {
  constructor(@InjectModel(TaskSubmitted.name) private taskSubmittedModel: Model<TaskSubmittedDocument>) { }
  create(task: TaskSubmitted): Promise<TaskSubmitted> {
    return this.taskSubmittedModel.create(task);
  }
  async findAll(): Promise<TaskSubmitted[]> {
    return this.taskSubmittedModel.find().exec();
  }
  async findById(id: string): Promise<TaskSubmitted> {
    return this.taskSubmittedModel.findById(id).exec();
  }

  async update(id: string, task: TaskSubmitted): Promise<any> {
    return await this.taskSubmittedModel.findByIdAndUpdate(id, task, {
      new: true,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.taskSubmittedModel.findByIdAndRemove(id);
  }
  async deleteAll(): Promise<any> {
    return await this.taskSubmittedModel.deleteMany()
  }
}
