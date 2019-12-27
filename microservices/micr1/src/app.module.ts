import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Micr1Service } from './micr1/micr1.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Micr1Service],
})
export class AppModule {}
