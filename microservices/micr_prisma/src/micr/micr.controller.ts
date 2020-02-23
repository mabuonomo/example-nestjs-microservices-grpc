import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserById, User } from './interfaces';

@Controller()
export class MicrService {
  @GrpcMethod()
  findOne(data: UserById, metadata: any): User {
    const items = [
      { id: 3, name: 'John2', surname: 'Prova' },
      { id: 4, name: 'Doe2', surname: 'Test' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
