import { Controller, Get, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly service: CalendarService) {}

  @Get()
  calendar(@Query('start') start?: string, @Query('end') end?: string) {
    return this.service.calendar(start, end);
  }

  @Get('hijri/annual')
  hijri() {
    return this.service.hijri();
  }
}