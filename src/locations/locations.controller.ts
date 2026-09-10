import { Controller, Get, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly service: LocationsService) {}

  @Get('countries')
  countries() { return this.service.countries(); }

  @Get('states')
  states(@Query('countryId') countryId: string) {
    return this.service.states(Number(countryId));
  }

  @Get('cities')
  cities(
    @Query('countryId') countryId: string,
    @Query('stateFilter') stateFilter: string,
  ) {
    return this.service.cities(Number(countryId), stateFilter);
  }

  @Get('search')
  search(
    @Query('searchName') searchName: string,
    @Query('size') size?: string,
    @Query('page') page?: string,
  ) {
    return this.service.search(
      searchName,
      size ? Number(size) : undefined,
      page ? Number(page) : undefined,
    );
  }
}