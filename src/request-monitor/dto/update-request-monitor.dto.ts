import { PartialType } from '@nestjs/swagger';
import { CreateRequestMonitorDto } from './create-request-monitor.dto';

export class UpdateRequestMonitorDto extends PartialType(
  CreateRequestMonitorDto,
) {}
