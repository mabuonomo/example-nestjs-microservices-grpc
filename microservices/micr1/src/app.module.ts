import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Micr1Service } from './micr1/micr1.controller';

@Module({
  imports: [],
  controllers: [AppController, Micr1Service],
  providers: [AppService, Micr1Service],
})
export class AppModule {}
