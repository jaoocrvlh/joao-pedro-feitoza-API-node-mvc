# API REST com Node.js, Express e MySQL — Arquitetura MVC

**Aluno:** João Pedro Carvalho Feitoza
**Turma:** (preencha sua turma)
**Disciplina:** Programação Web III (PW3) — Atividade Prática 02

## Arquitetura em camadas (MVC)

- **config/**: conexão com o MySQL (pool do `mysql2`) e leitura das variáveis de ambiente com `dotenv`.
- **models/**: camada de dados. Único lugar com SQL (`SELECT`, `INSERT`, `UPDATE`, `DELETE`), sempre com queries parametrizadas (`?`).
- **controllers/**: recebe a requisição, valida os dados, chama o Model e responde com o status HTTP adequado.
- **routes/**: define os endpoints com `express.Router()` e liga cada verbo HTTP ao método do Controller.
- **View**: como é uma API, a "view" são as respostas em JSON.
- **app.js**: configura os middlewares (`cors`, `express.json`) e sobe o servidor, sem nenhuma query SQL.

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie o banco e a tabela executando o `schema.sql` no MySQL:
   ```bash
   mysql -u seu_usuario -p < schema.sql
   ```
3. Copie o `.env.example` para `.env` e preencha com suas credenciais:
   ```bash
   cp .env.example .env
   ```
4. Inicie o servidor:
   ```bash
   npm run dev    # com nodemon
   npm start      # sem nodemon
   ```

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /usuarios | Cria usuário (`nome`, `email` no body) |
| GET | /usuarios | Lista todos os usuários |
| PUT | /usuarios/:id | Atualiza um usuário |
| DELETE | /usuarios/:id | Remove um usuário |

Exemplo de body (POST/PUT):
```json
{ "nome": "Maria Souza", "email": "maria@exemplo.com" }
```
