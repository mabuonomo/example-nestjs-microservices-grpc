import { Test, TestingModule } from '@nestjs/testing';
import { Micr1Service } from './micr1.service';

describe('Micr1Service', () => {
  let service: Micr1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Micr1Service],
    }).compile();

    service = module.get<Micr1Service>(Micr1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
