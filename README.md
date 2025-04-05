# Documentação do Banco de Dados - Sistema de Inscrição

## Visão Geral

Este banco de dados foi projetado para gerenciar um sistema completo de inscrições para cursos, incluindo funcionalidades de usuários, notificações, calendários e contatos.

## Diagrama Entidade-Relacionamento (DER)

O sistema consiste em 7 entidades principais relacionadas entre si:

1. **Usuarios** - Gerencia contas de acesso ao sistema
2. **Notificacoes** - Armazena notificações do sistema para usuários
3. **Cursos** - Contém informações sobre os cursos oferecidos
4. **Calendarios** - Gerencia eventos e prazos relacionados aos cursos
5. **Inscricoes** - Registra as inscrições dos alunos nos cursos
6. **Contactos** - Armazena mensagens de contato recebidas
7. **Indexes** - (Observação: Esta entidade parece incompleta na documentação)

## Estrutura das Tabelas

### 1. Tabela `Usuarios`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id_usuario | INT | Chave primária |
| nome | VARCHAR(255) | Nome completo do usuário |
| senha | TEXT | Senha criptografada |
| token_de_acesso | TEXT | Token para autenticação |
| email | VARCHAR(255) | E-mail único do usuário |

### 2. Tabela `Notificacoes`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id_notificacao | INT | Chave primária |
| data_de_notificacao | VARCHAR(100) | Data/hora da notificação |
| descricao | VARCHAR(255) | Conteúdo da notificação |
| id_usuario | INT | Chave estrangeira para Usuarios |

### 3. Tabela `Cursos`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id_curso | INT | Chave primária |
| nome | VARCHAR(255) | Nome do curso |
| descricao | VARCHAR(255) | Descrição detalhada |
| data_de_cadastro | DATETIME | Data de criação do registro |
| area | VARCHAR(255) | Área de conhecimento |
| duracao | INT | Duração em horas |
| numeros_de_vagas | INT | Vagas disponíveis |

### 4. Tabela `Calendarios`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id_calendario | INT | Chave primária |
| titulo_do_anuncio | VARCHAR(255) | Título do evento |
| data_de_termino | DATE | Data final do evento |
| descricao | VARCHAR(255) | Detalhes do evento |
| id_curso | INT | Chave estrangeira para Cursos |
| data_de_cadastro | DATETIME | Data de criação |

### 5. Tabela `Inscricoes`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id_incricao | INT | Chave primária |
| idade | INT | Idade do candidato |
| genero | VARCHAR(255) | Gênero |
| numero_de_processo | INT | Número único de processo |
| nome_completo | VARCHAR(255) | Nome do candidato |
| contacto_do_aluno | VARCHAR(20) | Telefone do aluno |
| contacto_do_encarregado | VARCHAR(20) | Telefone do responsável |
| id_calendario | INT | Chave estrangeira para Calendarios |
| data_de_nascimento | DATE | Data de nascimento |
| natural_de | VARCHAR(255) | Naturalidade |
| provincia | VARCHAR(255) | Província de origem |
| tipo_de_identificacao | VARCHAR(255) | Tipo de documento |
| numero_de_identificacao | VARCHAR(255) | Número do documento |
| data_de_validade | DATE | Validade do documento |
| arquivo_de_identificacao | LONGBLOB | Documento digitalizado |
| foto_tipo_passe | LONGBLOB | Foto 3x4 |
| classe | VARCHAR(255) | Classe/turma |
| turno | VARCHAR(255) | Turno (manhã/tarde/noite) |

### 6. Tabela `Contactos`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id_contacto | INT | Chave primária |
| nome | VARCHAR(255) | Nome do contato |
| email | VARCHAR(255) | E-mail do contato |
| assunto | VARCHAR(255) | Assunto da mensagem |
| mensagem | VARCHAR(255) | Conteúdo da mensagem |
| respondido | INT | Status (0/1) |
| data_de_contacto | DATETIME | Data de recebimento |
| data_de_resposta | DATETIME | Data de resposta |

## Relacionamentos

1. **Usuarios ↔ Notificacoes**: Um-para-muitos (um usuário pode ter várias notificações)
2. **Cursos ↔ Calendarios**: Um-para-muitos (um curso pode ter vários eventos no calendário)
3. **Calendarios ↔ Inscricoes**: Um-para-muitos (um evento pode ter várias inscrições)

## Observações

1. A entidade "Indexes" parece estar incompleta na documentação fornecida
2. Alguns campos como `contacto_do_aluno` e `contacto_do_encarregado` aparecem truncados
3. Recomenda-se adicionar índices para campos frequentemente consultados
4. Para produção, considere normalizar alguns campos como "provincia" e "natural_de"
