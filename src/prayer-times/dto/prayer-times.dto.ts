export interface ApiAttributes {
  encoding: string;
  version: string;
}

export interface CityInfo {
  ID: string;
  countryID: string;
  cityNameTR: string;
  cityNameEN: string;
  cityStateTR: string;
  cityStateEN: string;
  arzDer: string;
  arzDak: string;
  arzYon: string;
  tulDer: string;
  tulDak: string;
  tulYon: string;
  STulDer: string;
  STulDak: string;
  STulYon: string;
  tchange: string;
  height: string;
  scale: string;
  summerStart: string;
  summerEnd: string;
  qiblaangle: string;
  magdeg: string;
}

export interface PrayerTimeAttributes {
  tarih: string;
  gun: string;
  hicri: string;
}

export interface PrayerTime {
  '@attributes': PrayerTimeAttributes;
  imsak: string;
  sabah: string;
  gunes: string;
  israk: string;
  dahve: string;
  kerahet: string;
  ogle: string;
  ikindi: string;
  asrisani: string;
  isfirar: string;
  aksam: string;
  istibak: string;
  yatsi: string;
  isaisani: string;
  geceyarisi: string;
  teheccud: string;
  seher: string;
  kible: string;
}

export interface PrayerTimesResponse {
  '@attributes': ApiAttributes;
  cityinfo: { '@attributes': CityInfo };
  vakit: PrayerTime[];
}