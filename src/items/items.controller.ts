// import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
// import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items.';
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Item ${param.id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return JSON.stringify(createItemDto, null, '🐷');
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string) {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }

  // @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   console.log(req.url);
  //   return res.send('[res.send] Get all items.');
  // }
}
