import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/createVehicle (POST)', () => {
    console.log(process.env.NODE_ENV);
    return request(app.getHttpServer())
      .post('/createVehicle')
      .send({ id: 10, location: { latitude: 66, longitude: 7667 } })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
  });

  it('/createFleet (POST)', () => {
    return request(app.getHttpServer())
      .post('/createFleet')
      .send({ id: 10, registeredVehicles: [], parkedVehicles: [] })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
  });

  it('/register (POST)', () => {
    return request(app.getHttpServer())
      .post('/register')
      .send({ vehicleId: 10, fleetId: 10 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
  });

  it('/park (POST)', () => {
    return request(app.getHttpServer())
      .post('/park')
      .send({ vehicleId: 10, fleetId: 10 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
  });

  it('/location (GET)', () => {
    return request(app.getHttpServer())
      .get('/location')
      .query({ vehicleId: 10 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
