import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  // private readonly items: Item[] = [
  //   {
  //     id: '1001',
  //     name: 'Item One',
  //     qty: 44,
  //     desc: 'desc ont',
  //   },
  //   {
  //     id: '1002',
  //     name: 'Item two',
  //     qty: 50,
  //     desc: 'desc two',
  //   },
  // ];
}
