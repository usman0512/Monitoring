import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enrollment, EnrollmentDocument } from 'src/schemas/enrollment.schema';

@Injectable()
export class EnrollmentService {
  constructor(@InjectModel(Enrollment.name) private enrollmentModel: Model<EnrollmentDocument>) { }
  create(enrollment: Enrollment): Promise<Enrollment> {
    return this.enrollmentModel.create(enrollment);
  }
  async findAll(): Promise<Enrollment[]> {
    return this.enrollmentModel.find().exec();
  }
  async findById(id: string): Promise<Enrollment> {
    return this.enrollmentModel.findById(id).exec();
  }

  async update(id: string, enrollment: Enrollment): Promise<any> {
    return await this.enrollmentModel.findByIdAndUpdate(id, enrollment, {
      new: true,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.enrollmentModel.findByIdAndRemove(id);
  }
  async deleteAll(): Promise<any> {
    return await this.enrollmentModel.deleteMany()
  }
}
