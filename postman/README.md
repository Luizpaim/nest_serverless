# 🚀 Collection Postman - Roles API

Esta collection contém todos os endpoints para testar a API de Roles desenvolvida com NestJS e DynamoDB.

## 📋 Como importar no Postman

### 1. Importar Collection

1. Abra o Postman
2. Clique em `Import` no canto superior esquerdo
3. Selecione o arquivo `Roles_API.postman_collection.json`
4. Clique em `Import`

### 2. Importar Environment

1. Clique na engrenagem ⚙️ no canto superior direito
2. Selecione `Import`
3. Selecione o arquivo `Development.postman_environment.json`
4. Clique em `Import`
5. Selecione o environment "Development - NestJS API" no dropdown

## 🔧 Configuração

### Variáveis do Environment

- **baseUrl**: `http://localhost:3000` (URL da API local)
- **roleId**: Cole aqui um ID de role válido para testes
- **adminRoleId**: ID da role Admin (após criar)
- **userRoleId**: ID da role User (após criar)

## 📚 Endpoints Disponíveis

### 📋 **Listagem**

- `GET /roles` - Lista todas as roles
- `GET /roles?limit=10` - Lista com paginação
- `GET /roles/active` - Lista apenas roles ativas

### ➕ **Criação**

- `POST /roles` - Cria nova role
    ```json
    {
        "name": "Admin",
        "description": "Administrador do sistema",
        "permissions": ["read", "write", "delete"],
        "isActive": true
    }
    ```

### 🔍 **Busca**

- `GET /roles/:id` - Busca role por ID

### ✏️ **Atualização**

- `PATCH /roles/:id` - Atualiza role
- `PATCH /roles/:id/activate` - Ativa role
- `PATCH /roles/:id/deactivate` - Desativa role

### 🗑️ **Exclusão**

- `DELETE /roles/:id` - Remove role

### ❌ **Testes de Erro**

- Tentativa de criar role duplicada (409)
- Busca por ID inválido (404)
- Validação com dados inválidos (400)

## 🔄 Fluxo de Teste Recomendado

### 1. Verificar API

```
GET /roles (deve retornar lista vazia)
```

### 2. Criar Roles

```
POST /roles - Admin
POST /roles - Manager
POST /roles - User
```

### 3. Listar e Verificar

```
GET /roles (deve mostrar 3 roles)
GET /roles/active (deve mostrar roles ativas)
```

### 4. Testar CRUD

```
GET /roles/:id (buscar role específica)
PATCH /roles/:id (atualizar)
PATCH /roles/:id/deactivate (desativar)
GET /roles/active (verificar que não aparece mais)
PATCH /roles/:id/activate (reativar)
```

### 5. Testar Validações

```
POST /roles com dados inválidos
POST /roles com nome duplicado
GET /roles/invalid-id
```

### 6. Limpeza

```
DELETE /roles/:id (remover roles de teste)
```

## ⚠️ Observações Importantes

1. **IDs Dinâmicos**: Após criar uma role, copie o ID retornado e cole na variável `roleId` do environment

2. **Ordem dos Testes**: Alguns testes dependem de dados criados anteriormente

3. **Status Codes Esperados**:
    - `200` - Sucesso (GET, PATCH)
    - `201` - Criado (POST)
    - `204` - Sem conteúdo (DELETE)
    - `400` - Dados inválidos
    - `404` - Não encontrado
    - `409` - Conflito (nome duplicado)

4. **Estrutura da Response**:

    ```json
    // Listagem
    {
      "items": [...],
      "lastEvaluatedKey": "..."
    }

    // Item individual
    {
      "id": "uuid",
      "name": "Admin",
      "description": "...",
      "permissions": [...],
      "isActive": true,
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    }
    ```

## 🐛 Troubleshooting

- **Erro 500**: Verifique se a aplicação está rodando (`npm run start:dev`)
- **Erro de conexão**: Confirme se a URL base está correta
- **Erro 404**: Verifique se o ID da role existe
- **Erro de validação**: Confirme se os dados obrigatórios estão presentes

## 🚀 Para Produção

Para usar em ambiente de produção:

1. Duplique o environment "Development"
2. Renomeie para "Production"
3. Altere a `baseUrl` para a URL da API em produção
4. Configure variáveis de autenticação se necessário
