# Türkiye Takvimi Service — TypeScript / NestJS

TypeScript/NestJS implementation of the Türkiye Takvimi XML/JSON service.

## Run

```bash
npm install
cp .env.example .env
npm run start:dev
```

Windows PowerShell:
```powershell
npm install
Copy-Item .env.example .env
npm run start:dev
```

## API

- GET `/api/v1/prayer-times/local-time?cityId=16741`
- GET `/api/v1/prayer-times/annual?cityId=16741`
- GET `/api/v1/prayer-times/range?start=2026-09-01&end=2026-09-15`
- GET `/api/v1/calendar`
- GET `/api/v1/calendar?start=2026-09-01&end=2026-09-15`
- GET `/api/v1/calendar/hijri/annual`
- GET `/api/v1/locations/countries`
- GET `/api/v1/locations/states?countryId=200`
- GET `/api/v1/locations/cities?countryId=200&stateFilter=ADANA`
- GET `/api/v1/locations/search?searchName=ist&size=5&page=1`

The real `vakit` response supplied during development is fully typed in
`src/prayer-times/dto/prayer-times.dto.ts`.

The other upstream JSON schemas are kept as `unknown` until their real
responses are captured, rather than inventing fields.
