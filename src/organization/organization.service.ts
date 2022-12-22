import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization, OrganizationDocument } from 'src/schemas/organization.schema';

@Injectable()
export class OrganizationService {
  constructor(@InjectModel(Organization.name) private organizationModel: Model<OrganizationDocument>) { }
  create(organization: Organization): Promise<Organization> {
    return this.organizationModel.create(organization);
  }
  async findAll(): Promise<Organization[]> {
    return this.organizationModel.find().exec();
  }
  async findById(id: string): Promise<Organization> {
    return this.organizationModel.findById(id).exec();
  }

  async update(id: string, organization: Organization): Promise<any> {
    return await this.organizationModel.findByIdAndUpdate(id, organization, {
      new: true,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.organizationModel.findByIdAndRemove(id);
  }
  async deleteAll(): Promise<any> {
    return await this.organizationModel.deleteMany()
  }
}
