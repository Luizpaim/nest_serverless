import {
    Context,
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
} from 'aws-lambda'

import { CallbackHandler } from '@fastify/aws-lambda'
import { bootstrapLambdaApp } from './shared/config/bootstrap/bootstrap-lambda'
import { RolesModule } from './modules/roles/roles.module'

let proxy: CallbackHandler

export const handler = async (
    event: APIGatewayProxyEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {
    proxy = await bootstrapLambdaApp(RolesModule)
    return new Promise((resolve, reject) => {
        proxy(event, context, (err, result) => {
            if (err) return reject(err)
            resolve(result as APIGatewayProxyResult)
        })
    })
}
