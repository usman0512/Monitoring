import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coordinator, CoordinatorDocument } from 'src/schemas/coordinator.schema';

@Injectable()
export class CoordinatorService {
  constructor(@InjectModel(Coordinator.name) private coordinatorModel: Model<CoordinatorDocument>) { }
  create(student: Coordinator): Promise<Coordinator> {
    return this.coordinatorModel.create(student);
  }
  async findAll(): Promise<Coordinator[]> {
    return this.coordinatorModel.find().exec();
  }
  async findById(id: string): Promise<Coordinator> {
    return this.coordinatorModel.findById(id).exec();
  }

  async update(id: string, student: Coordinator): Promise<any> {
    return await this.coordinatorModel.findByIdAndUpdate(id, student, {
      new: true,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.coordinatorModel.findByIdAndRemove(id);
  }
  async deleteAll(): Promise<any> {
    return await this.coordinatorModel.deleteMany()
  }
}
