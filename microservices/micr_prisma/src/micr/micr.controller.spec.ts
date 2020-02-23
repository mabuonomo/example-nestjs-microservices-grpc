import { Test, TestingModule } from '@nestjs/testing';
import { MicrService } from './micr.controller';

describe('Micr2 Controller', () => {
  let controller: MicrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicrService],
    }).compile();

    controller = module.get<MicrService>(MicrService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
