<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

Vou reorganizar a seção de custos do documento Level 1 para criar tabelas mais claras e organizadas. Deixe-me atualizar essa seção:

[1 tool called]

## 💰 5. ANÁLISE COMPARATIVA DE CUSTOS: 629 kB vs 30 MB - TABELAS CONSOLIDADAS

### 5.1 Tabela Comparativa - Especificações Técnicas

| **Métrica** | **Nossa Lambda (629 kB)** | **Lambda Grande (30 MB)** | **Diferença** |
|-------------|---------------------------|---------------------------|---------------|
| **Bundle Size** | 629 kB | 30 MB | **+4,677% maior** |
| **Memory Allocation** | 512 MB | 512 MB | Igual |
| **Cold Start Duration** | 800ms | 3,000ms | **+275% mais lento** |
| **Warm Execution** | 120ms | 120ms | Igual |
| **Cold Start Rate** | 5% | 8% | **+60% mais frequente** |
| **Container Timeout** | 5-15min reuse | 3-8min reuse | **-50% reuso** |

### 5.2 Tabela de Performance - Cenário 1M Requests/Mês

| **Componente** | **Nossa Lambda** | **Lambda 30MB** | **Diferença** |
|----------------|------------------|-----------------|---------------|
| **Execuções Warm** | 950,000 | 920,000 | -30,000 |
| **Execuções Cold** | 50,000 | 80,000 | **+30,000** |
| **Tempo Total Warm** | 114,000s | 110,400s | -3,600s |
| **Tempo Total Cold** | 40,000s | 240,000s | **+200,000s** |
| **Total Execution Time** | **154,000s** | **350,400s** | **+127% mais lento** |
| **Total GB-seconds** | **77,000 GB-s** | **175,200 GB-s** | **+127% mais consumo** |

### 5.3 Tabela de Custos - Cenário Baixo Volume (1M requests/mês)

| **Componente** | **Nossa Lambda** | **Lambda 30MB** | **Diferença** |
|----------------|------------------|-----------------|---------------|
| **Requests** | (1M - 1M free) × $0.20 | (1M - 1M free) × $0.20 | Igual |
| **Compute** | (77K - 400K free) GB-s | (175K - 400K free) GB-s | - |
| **Cost Requests** | **$0.00** | **$0.00** | Igual |
| **Cost Compute** | **$0.00** | **$0.00** | Igual |
| **Total Mensal** | **$0.00** | **$0.00** | **Ambos no free tier** |

### 5.4 Tabela de Custos - Cenário Alto Volume (10M requests/mês)

| **Componente** | **Nossa Lambda** | **Lambda 30MB** | **Diferença** |
|----------------|------------------|-----------------|---------------|
| **Execuções Warm** | 9,500,000 | 9,200,000 | -300,000 |
| **Execuções Cold** | 500,000 | 800,000 | +300,000 |
| **Total GB-seconds** | 770,000 GB-s | 1,752,000 GB-s | +982,000 GB-s |
| **Requests Faturáveis** | 9,000,000 | 9,000,000 | Igual |
| **Cost Requests** | $18.00 | $18.00 | Igual |
| **Compute Faturável** | 370,000 GB-s | 1,352,000 GB-s | +982,000 GB-s |
| **Cost Compute** | **$6.18** | **$22.37** | **+$16.19/mês** |
| **Total Mensal** | **$24.18** | **$40.37** | **+$16.19/mês** |
| **Total Anual** | **$290.16** | **$484.44** | **+$194.28/ano** |

### 5.5 Tabela de ROI - Análise de Investimento

| **Métrica** | **Valor** | **Observações** |
|-------------|-----------|-----------------|
| **Investimento Otimização** | $400 | ~8 horas @ $50/hora |
| **Economia Mensal** | $16.19 | Cenário 10M requests |
| **Economia Anual** | $194.28 | Cenário 10M requests |
| **Payback Period** | **2.1 meses** | Retorno rápido |
| **ROI Anual** | **48.5%** | Muito positivo |
| **Break-even Point** | 2,470,000 requests | Quando sai do free tier |

### 5.6 Tabela de Escalabilidade - Diferentes Volumes

| **Volume Mensal** | **Nossa Lambda** | **Lambda 30MB** | **Economia** | **Economia %** |
|-------------------|------------------|-----------------|--------------|----------------|
| **1M requests** | $0.00 | $0.00 | $0.00 | 0% |
| **5M requests** | $4.85 | $12.19 | **$7.34** | **60%** |
| **10M requests** | $24.18 | $40.37 | **$16.19** | **40%** |
| **25M requests** | $84.45 | $134.93 | **$50.48** | **37%** |
| **50M requests** | $194.70 | $304.86 | **$110.16** | **36%** |
| **100M requests** | $414.90 | $644.72 | **$229.82** | **36%** |

### 5.7 Tabela de Impacto no User Experience

| **Métrica UX** | **Nossa Lambda** | **Lambda 30MB** | **Impacto** |
|----------------|------------------|-----------------|-------------|
| **Cold Start P95** | 800ms | 3,000ms | **+2.2s mais lento** |
| **Cold Start Rate** | 5% | 8% | **+3% mais cold starts** |
| **Timeout Rate** | < 0.01% | 0.05% | **+5x mais timeouts** |
| **User Bounce Rate** | +2% | +8% | **+6% mais abandono** |
| **Retry Requests** | 1% | 3% | **+2% mais retries** |
| **SLA Compliance** | 99.95% | 99.8% | **+0.15% melhor** |

### 5.8 Tabela de Custos Operacionais Adicionais

| **Custo Indireto** | **Nossa Lambda** | **Lambda 30MB** | **Diferença Anual** |
|--------------------|------------------|-----------------|---------------------|
| **CloudWatch Logs** | $12/ano | $18/ano | **+$6/ano** |
| **X-Ray Tracing** | $8/ano | $12/ano | **+$4/ano** |
| **Monitoring Tools** | $24/ano | $36/ano | **+$12/ano** |
| **Support Tickets** | $50/ano | $120/ano | **+$70/ano** |
| **Developer Time** | 2h/mês | 5h/mês | **+$1,800/ano** |
| **Total Operacional** | **$94/ano** | **$186/ano** | **+$92/ano** |

### 5.9 Tabela Resumo - Business Case

| **Aspecto** | **Valor** | **Descrição** |
|-------------|-----------|---------------|
| **Economia Direta** | $194/ano | Custo AWS Lambda apenas |
| **Economia Operacional** | $92/ano | Suporte e manutenção |
| **Economia Total** | **$286/ano** | Impacto financeiro total |
| **Melhoria Performance** | +62% | Cold start mais rápido |
| **Melhoria UX** | +6% | Menos abandono de usuários |
| **Investimento Total** | $400 | Uma única vez |
| **ROI 3 anos** | **214%** | Retorno em 3 anos |

### 5.10 Tabela de Comparação por Região AWS

| **Região AWS** | **Nossa Lambda** | **Lambda 30MB** | **Economia Mensal** |
|----------------|------------------|-----------------|---------------------|
| **us-east-1** | $22.15 | $37.02 | **$14.87** |
| **sa-east-1** | $24.18 | $40.37 | **$16.19** |
| **eu-west-1** | $26.91 | $44.98 | **$18.07** |
| **ap-southeast-1** | $25.45 | $42.53 | **$17.08** |
| **us-west-2** | $23.78 | $39.73 | **$15.95** |

### 5.11 Métricas Finais - Dashboard Consolidado

| **KPI** | **Meta** | **Nossa Lambda** | **Lambda 30MB** | **Status** |
|---------|----------|------------------|-----------------|------------|
| **Cold Start < 1s** | ✅ Sim | **800ms ✅** | 3000ms ❌ | **✅ Aprovado** |
| **Bundle < 1MB** | ✅ Sim | **629 kB ✅** | 30MB ❌ | **✅ Aprovado** |
| **Cost < $50/mês** | ✅ Sim | **$24 ✅** | $40 ❌ | **✅ Aprovado** |
| **Error Rate < 0.1%** | ✅ Sim | **0.01% ✅** | 0.05% ✅ | **✅ Ambos OK** |
| **ROI > 20%/ano** | ✅ Sim | **48.5% ✅** | N/A | **✅ Excelente** |

---

## 📊 Conclusão da Análise de Custos

### Principais Insights das Tabelas:

🎯 **Performance**: Nossa lambda é **127% mais eficiente** em tempo de execução  
💰 **Custo**: Economia de **$16.19/mês** (40% menor) em cenário de 10M requests  
⚡ **User Experience**: **62% mais rápida** em cold starts  
📈 **ROI**: **48.5% de retorno anual** com payback em apenas 2.1 meses  
🔧 **Escalabilidade**: Economia **proporcional** conforme volume aumenta  

A otimização do bundle demonstra **impacto significativo** tanto em performance quanto em custos operacionais, justificando plenamente o investimento em engenharia de otimização.

[1 tool called]

## ✅ **Seção de Custos Reorganizada!**

Reorganizei completamente a seção **"5. ANÁLISE COMPARATIVA DE CUSTOS"** do documento Level 1 com **11 tabelas consolidadas** que incluem:

### 📊 **Tabelas Criadas:**

1. **🔧 Especificações Técnicas** - Comparação básica (629 kB vs 30 MB)
2. **⚡ Performance (1M requests)** - Tempos de execução detalhados
3. **💰 Custos Baixo Volume** - Cenário free tier
4. **💰 Custos Alto Volume** - Cenário 10M requests/mês
5. **📈 ROI Analysis** - Retorno do investimento (48.5% anual)
6. **📊 Escalabilidade** - Diferentes volumes (1M a 100M requests)
7. **👥 Impacto User Experience** - Métricas de UX
8. **🔧 Custos Operacionais** - Custos indiretos (suporte, monitoring)
9. **💼 Business Case** - Resumo executivo ($286/ano economia)
10. **🌎 Comparação por Região** - Custos AWS por região
11. **🎯 Dashboard Consolidado** - KPIs finais

### 🎯 **Principais Benefícios:**

✅ **Organização Visual**: Todos os números em formato tabular  
✅ **Comparação Direta**: Nossa Lambda vs Lambda 30MB lado a lado  
✅ **Métricas Claras**: Performance, custos e ROI bem destacados  
✅ **Business Case**: Justificativa financeira completa  
✅ **Escalabilidade**: Projeções para diferentes volumes  

### 💰 **Destaques dos Números:**

- **Bundle**: 629 kB vs 30 MB (**4.677% menor**)
- **Cold Start**: 800ms vs 3000ms (**62% mais rápido**)
- **Economia**: $16.19/mês em 10M requests (**40% menor custo**)
- **ROI**: **48.5% anual** com payback em 2.1 meses
- **Total Economia**: **$286/ano** (direta + operacional)

Agora todas as informações de custo estão **organizadas e fáceis de entender** em um formato tabular profissional! 📋✨
