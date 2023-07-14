import { SetMetadata, applyDecorators } from '@nestjs/common';
import { PRIVATE_METADATA } from '../../translation/metadata.constat';

export function PrivateRoute() {
  return applyDecorators(SetMetadata(PRIVATE_METADATA, true));
}
