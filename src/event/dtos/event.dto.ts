import { PickType } from '@nestjs/mapped-types';
import { EventEntity } from '../entities/event.entity';
import { IsNumber, IsString } from 'class-validator';

export class EventDTO extends PickType(EventEntity, ['type'] as const) {
  @IsString()
  translationId: string;
  @IsNumber()
  userId: number;
}
