import { Controller, Get, Query } from '@nestjs/common';
import { PrayerTimesService } from './prayer-times.service';

@Controller('prayer-times')
export class PrayerTimesController {
  constructor(private readonly service: PrayerTimesService) {}

  @Get('local-time')
  localTime(@Query('cityId') cityId: string) {
    return this.service.localTime(Number(cityId));
  }

  @Get('annual')
  annual(@Query('cityId') cityId: string) {
    return this.service.annual(Number(cityId));
  }

  @Get('range')
  range(@Query('start') start: string, @Query('end') end: string) {
    return this.service.range(start, end);
  }
}