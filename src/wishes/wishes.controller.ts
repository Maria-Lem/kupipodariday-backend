import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { WishesService } from './wishes.service';
import { Wish } from './entities/wish.entity';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}

  // @Post()
  // async createWish()

  @Get(':id')
  async findWishById(@Param('id') id: number): Promise<Wish> {
    return await this.wishesService.findWishById(id);
  }

  @Get('last')
  async getLastWishes(): Promise<Wish[]> {
    return await this.wishesService.getLastWishes();
  }

  @Get('top')
  async getTopWishes(): Promise<Wish[]> {
    return await this.wishesService.getTopWishes();
  }

  // @Patch(':id')

  // @Delete(':id')

  // @Post(':id/copy')
}
