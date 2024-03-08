import { Body, Controller, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { USER_NOT_FOUND } from 'src/utils/constants/users';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // TODO
  // @Get('me')

  // @Get('me/wishes')

  @Get(':username')
  async findUserByUsername(@Param('username') username: string): Promise<User> {
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    return user;
  }

  // @Get(':username/wishes')

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // @Patch('me')

  @Post('find')
  async findMany(@Body('query') query: string): Promise<User[]> {
    return this.usersService.findMany(query);
  }
}
