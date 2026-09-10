import { Module } from '@nestjs/common';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import { TurktakvimClient } from '../common/turktakvim.client';

@Module({
  controllers: [CalendarController],
  providers: [CalendarService, TurktakvimClient],
})
export class CalendarModule {}