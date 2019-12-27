import { Test, TestingModule } from '@nestjs/testing';
import { Micr1Service } from './micr1.controller';

describe('Micr1 Controller', () => {
  let controller: Micr1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Micr1Service],
    }).compile();

    controller = module.get<Micr1Service>(Micr1Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
