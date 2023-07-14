import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ApiKeyService } from '../../api-key/api-key.service';
import { Reflector } from '@nestjs/core';
import { PRIVATE_METADATA } from '../../translation/metadata.constat';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    private readonly _apiKeyService: ApiKeyService,
    private readonly _reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext) {
    const privateRoute = this._reflector.get(
      PRIVATE_METADATA,
      context.getHandler(),
    ) as boolean;

    if (!privateRoute) return true;

    console.log('metadata', privateRoute);
    const request = context.switchToHttp().getRequest<Request>();
    const apiKeyHeader = request.headers['x-api-key'] as string;
    const apiKey = await this._apiKeyService.getByApiKey(apiKeyHeader);

    if (apiKey) {
      return true;
    }

    return false;
  }
}
