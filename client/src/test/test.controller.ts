import { Controller, Get } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions1 } from './client1';
import { grpcClientOptions2 } from './client2';

@Controller('test')
export class TestController {
  @Client(grpcClientOptions1)
  private readonly client1: ClientGrpc;

  @Client(grpcClientOptions2)
  private readonly client2: ClientGrpc;

  @Get('client1')
  find1(): string {
    return 'This action returns all cats';
  }

  @Get('client2')
  find2(): string {
    return 'This action returns all cats';
  }
}
