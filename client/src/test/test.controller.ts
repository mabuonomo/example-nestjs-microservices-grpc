import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions1 } from './client1';
import { grpcClientOptions2 } from './client2';
import { Observable, of } from 'rxjs';
import { grpcClientPrismaOptions } from './client_prisma';

interface Micr1Service {
  findOne(data: { id: number }): Observable<any>;
}
interface Micr2Service {
  findOne(data: { id: number }): Observable<any>;
}

interface MicrService {
  findOne(data: { id: number }): any;
  save(data: { id: number }): Observable<any>;
}

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
  find1(): Observable<any> {
    return this.micr1Service.findOne({ id: 1 });
  }

  @Get('client2')
  find2(): Observable<any> {
    return this.micr2Service.findOne({ id: 3 });
  }

  @Get('client_prisma_add')
  prismaAdd(): Observable<any> {
    return this.micrPrismaService.save({ id: 3 });
  }

  @Get('client_prisma_get')
  async prismaGet(): Promise<any> {
    return this.micrPrismaService.findOne({ id: 3 });
  }
}
