import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { OffersModule } from './offers/offers.module';
import { WishesModule } from './wishes/wishes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'student',
      password: 'student',
      database: 'kupipodariday',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    OffersModule,
    WishesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
