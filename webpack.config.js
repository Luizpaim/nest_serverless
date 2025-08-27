const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/main.ts',
    target: 'node',
    externals: [
        nodeExternals({
            allowlist: [
                // Dependências que devem ser incluídas no bundle (copiado do projeto que funciona)
                '@aws-sdk/client-dynamodb',
                '@aws-sdk/lib-dynamodb',
                '@fastify/aws-lambda',
                '@fastify/static',
                '@nestjs/axios',
                '@nestjs/common',
                '@nestjs/config',
                '@nestjs/core',
                '@nestjs/platform-fastify',
                'class-transformer',
                'class-validator',
                'reflect-metadata',
                'rxjs',
                // Dependências críticas auxiliares
                'tslib',
                'uid',
                'iterare',
                'path-to-regexp',
            ],
        }),
        // Módulos nativos do Node.js
        'crypto',
        'fs',
        'path',
        'os',
        'util',
        'stream',
        'events',
        'child_process',
        'cluster',
        'worker_threads',
        'perf_hooks',
        'v8',
        'vm',
        'querystring',
        'url',
        'http',
        'https',
        'net',
        'tls',
        'dns',
        'dgram',
        'zlib',
        'readline',
        'repl',
        'assert',
        'buffer',
        'constants',
        'domain',
        'punycode',
        'string_decoder',
        'timers',
        'tty',
        'process',
        'module',
        'inspector',
        'trace_events',
        'async_hooks',
        // Dependências opcionais que não estão instaladas
        '@nestjs/websockets/socket-module',
        '@nestjs/microservices/microservices-module',
        '@nestjs/microservices',
        '@fastify/view',
    ],
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
        },
        fallback: {
            fs: false,
            net: false,
            tls: false,
            crypto: false,
            stream: false,
            url: false,
            zlib: false,
            http: false,
            https: false,
            assert: false,
            os: false,
            path: false,
        },
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 2020,
                    compress: {
                        drop_console: false, // Mantém console.log para debugging
                        drop_debugger: true,
                        pure_funcs: [],
                        dead_code: true,
                    },
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
        usedExports: true,
        sideEffects: false,
        splitChunks: false,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json',
                    transpileOnly: true,
                },
                exclude: [/node_modules/, /\.spec\.ts$/, /\.test\.ts$/],
            },
        ],
    },
    plugins: [],
    performance: {
        hints: false, // Desabilita warnings de performance
        maxEntrypointSize: 1024000, // 1MB
        maxAssetSize: 1024000, // 1MB
    },
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename],
        },
    },
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
    },
    ignoreWarnings: [
        /Critical dependency: the request of a dependency is an expression/,
    ],
}
