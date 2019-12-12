import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1001',
      name: 'Item One',
      qty: 44,
      desc: 'desc ont',
    },
    {
      id: '1002',
      name: 'Item two',
      qty: 50,
      desc: 'desc two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
