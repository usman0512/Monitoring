import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bulletin, BulletinDocument } from 'src/schemas/bulletin.schema';

@Injectable()
export class BulletinService {
    constructor(@InjectModel(Bulletin.name) private userModel: Model<BulletinDocument>){}
    create(bulletin: Bulletin) {
        const createdUser = new this.userModel(bulletin);
        return createdUser.save();
    }
    async findAll(): Promise<Bulletin[]> {
        return this.userModel.find().exec();
    }
}