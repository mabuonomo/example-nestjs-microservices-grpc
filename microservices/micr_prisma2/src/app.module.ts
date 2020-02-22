import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Micr2Service } from './micr2/micr2.controller';

@Module({
  imports: [],
  controllers: [AppController, Micr2Service],
  providers: [AppService, Micr2Service],
})
export class AppModule {}
