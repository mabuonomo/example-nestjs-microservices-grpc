import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Micr2ById, Micr2 } from '../../../../proto/build/micr2';

@Controller()
export class Micr2Service {
  @GrpcMethod()
  findOne(data: Micr2ById, metadata: any): Micr2 {
    const items = [
      { id: 3, name: 'John2' },
      { id: 4, name: 'Doe2' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
