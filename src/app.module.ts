import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { Category } from './entities/Category';
import { Product } from './entities/Product';
import { CategoryModule } from './controllers/category/category.module';
import { ProductModule } from './controllers/product/product.module';

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
    CategoryModule,
    ProductModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
