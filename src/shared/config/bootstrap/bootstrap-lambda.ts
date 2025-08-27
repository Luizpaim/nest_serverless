import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { NestFactory } from '@nestjs/core'
import { Type, ValidationPipe } from '@nestjs/common'
import { useContainer } from 'class-validator'
import { FastifyServerOptions, FastifyInstance, fastify } from 'fastify'
import awsLambdaFastify, { CallbackHandler } from '@fastify/aws-lambda'

interface NestApp {
    app: NestFastifyApplication
    instance: FastifyInstance
}

let cachedNestApp: NestApp
let proxy: CallbackHandler

export async function bootstrapLambdaApp(module: Type<any>) {
    if (!cachedNestApp) {
        const serverOptions: FastifyServerOptions = { logger: true }
        const instance = fastify(serverOptions)

        const app = await NestFactory.create<NestFastifyApplication>(
            module,
            new FastifyAdapter(instance)
        )

        app.useGlobalPipes(
            new ValidationPipe({
                transform: true,
                whitelist: true,
                forbidNonWhitelisted: true,
            })
        )

        useContainer(app.select(module), { fallbackOnErrors: true })

        await app.init()
        proxy = awsLambdaFastify(instance)
        cachedNestApp = { app, instance }
    }

    return proxy
}
