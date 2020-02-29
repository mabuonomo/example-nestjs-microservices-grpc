import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions1 } from './client1';
import { grpcClientOptions2 } from './client2';
import { Observable, of } from 'rxjs';
import { grpcClientPrismaOptions } from './client_prisma';
import { MicrService, User, UserList } from '../../../proto/build/micr_prisma';
import { Micr1Service, Micr1 } from '../../../proto/build/micr1';
import { Micr2Service, Micr2 } from '../../../proto/build/micr2';

@Controller('test')
export class TestController implements OnModuleInit {
  @Client(grpcClientOptions1)
  private readonly client1: ClientGrpc;

  @Client(grpcClientOptions2)
  private readonly client2: ClientGrpc;

  @Client(grpcClientPrismaOptions)
  private readonly clientPrisma: ClientGrpc;

  private micr1Service: Micr1Service;
  private micr2Service: Micr2Service;
  private micrPrismaService: MicrService;

  onModuleInit() {
    this.micr1Service = this.client1.getService<Micr1Service>('Micr1Service');
    this.micr2Service = this.client2.getService<Micr2Service>('Micr2Service');
    this.micrPrismaService = this.clientPrisma.getService<MicrService>(
      'MicrService',
    );
  }

  @Get('client1')
  find1(): Promise<Micr1> {
    return this.micr1Service.FindOne({ id: 1 });
  }

  @Get('client2')
  find2(): Promise<Micr2> {
    return this.micr2Service.FindOne({ id: 3 });
  }

  @Get('client_prisma_add')
  prismaAdd(): Promise<User> {
    return this.micrPrismaService.Save({});
  }

  @Get('client_prisma_get')
  async prismaGet(): Promise<UserList> {
    return this.micrPrismaService.FindOne({});
  }
}
