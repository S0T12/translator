import { Injectable } from '@nestjs/common';
import { CreateErrorDto } from './dto/create-error.dto';
import { UpdateErrorDto } from './dto/update-error.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorEntity } from './entities/error.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ErrorsService {
  constructor(
    @InjectRepository(ErrorEntity)
    private readonly _errorRepository: Repository<ErrorEntity>,
  ) {}
  create(createErrorDto: CreateErrorDto) {
    return this._errorRepository.save(createErrorDto);
  }

  findAll() {
    return this._errorRepository.find();
  }

  findOne(id: number) {
    return this._errorRepository.findOneBy({ id });
  }

  update(id: number, updateErrorDto: UpdateErrorDto) {
    return `This action updates a #${id} error`;
  }

  remove(id: number) {
    return `This action removes a #${id} error`;
  }
}
