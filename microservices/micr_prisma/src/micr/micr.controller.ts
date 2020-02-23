import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Micr2ById, Micr2 } from './interfaces';

@Controller()
export class MicrService {
  @GrpcMethod()
  findOne(data: Micr2ById, metadata: any): Micr2 {
    const items = [
      { id: 3, name: 'John2' },
      { id: 4, name: 'Doe2' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
