import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { Category } from './entities/Category';
import { Product } from './entities/Product';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'toor',
      database: 'inventory',
      entities: [User, Category, Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Category, Product]),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
