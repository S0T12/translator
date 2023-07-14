import { Test, TestingModule } from '@nestjs/testing';
import { NestOpenaiService } from './nest-openai.service';

describe('NestOpenaiService', () => {
  let service: NestOpenaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestOpenaiService],
    }).compile();

    service = module.get<NestOpenaiService>(NestOpenaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
