import { Module } from '@nestjs/common';
import { ErrorsService } from './errors.service';
import { ErrorsController } from './errors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorEntity } from './entities/error.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ErrorEntity])],
  controllers: [ErrorsController],
  providers: [ErrorsService],
  exports: [ErrorsService],
})
export class ErrorsModule {}
