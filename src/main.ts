import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function start() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.REDIS,
        options: {
            url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
        }
    })
    await app.listen()
    console.log('Microservice has been run...')
}
start()