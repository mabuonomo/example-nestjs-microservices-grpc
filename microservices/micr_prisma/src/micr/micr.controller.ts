import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from '../../../../proto/build/micr_prisma';
import { PrismaService } from '../prisma/prisma.service';

@Controller()
export class MicrService {
  constructor(private readonly prisma: PrismaService) {}

  @GrpcMethod()
  save(metadata: any): Promise<User> {
    return this.prisma.mutation.createUser({
      data: { name: 'John2', surname: 'Prova' },
    });
  }

  @GrpcMethod()
  async findOne(metadata: any): Promise<any> {
    return {
      users: await this.prisma.query.users({
        where: {
          name: 'John2',
        },
      }),
    };
  }
}
