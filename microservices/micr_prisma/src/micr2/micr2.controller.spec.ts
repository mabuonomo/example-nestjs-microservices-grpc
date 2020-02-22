import { Test, TestingModule } from '@nestjs/testing';
import { Micr2Service } from './micr2.controller';

describe('Micr2 Controller', () => {
  let controller: Micr2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Micr2Service],
    }).compile();

    controller = module.get<Micr2Service>(Micr2Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
