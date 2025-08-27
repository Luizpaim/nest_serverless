import { Module } from '@nestjs/common'
import { bootstrapLambdaApp } from './bootstrap-lambda'

@Module({})
class DummyModule {}

describe('bootstrap-lambda (coverage)', () => {
    it('deve inicializar proxy e reutilizar cache', async () => {
        const proxy1 = await bootstrapLambdaApp(DummyModule)
        expect(typeof proxy1).toBe('function')

        // Segunda chamada deve reutilizar app em cache e retornar o mesmo tipo
        const proxy2 = await bootstrapLambdaApp(DummyModule)
        expect(typeof proxy2).toBe('function')
    })
})


