import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Micr1ById, Micr1 } from '../../../../proto/build/micr1';

@Controller()
export class Micr1Service {
  @GrpcMethod()
  findOne(data: Micr1ById, metadata: any): Micr1 {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
