import { Injectable } from '@nestjs/common';
import { TurktakvimClient } from '../common/turktakvim.client';

@Injectable()
export class LocationsService {
  constructor(private readonly client: TurktakvimClient) {}

  countries() { return this.client.get({ tip: 'ulke' }); }
  states(countryId: number) { return this.client.get({ tip: 'eyalet', countryID: countryId }); }
  cities(countryId: number, stateFilter: string) {
    return this.client.get({ tip: 'sehir', countryID: countryId, cityStateFilter: stateFilter });
  }
  search(searchName: string, size?: number, page?: number) {
    return this.client.get({ tip: 'arama', SearchName: searchName, adet: size, sayfa: page });
  }
}