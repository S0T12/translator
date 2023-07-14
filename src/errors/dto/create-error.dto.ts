import { PickType } from '@nestjs/mapped-types';
import { ErrorEntity } from '../entities/error.entity';

export class CreateErrorDto extends PickType(ErrorEntity, [
  'message',
] as const) {}
