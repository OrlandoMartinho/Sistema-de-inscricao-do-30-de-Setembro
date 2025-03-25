# README - Diagrama Entidade-Relacionamento (DER)

## Visão Geral
Este documento descreve o modelo de banco de dados representado pelo Diagrama Entidade-Relacionamento (DER). O banco de dados é estruturado para gerenciar um sistema de inscrições em cursos, permitindo o cadastro de usuários, inscrições, notificações, avaliadores e comentários.

## Entidades e Relacionamentos

### 1. **Usuarios**
Armazena informações sobre os usuários cadastrados no sistema.

- **id_usuario (INT)** - Chave primária.
- **nome (VARCHAR(255))** - Nome do usuário.
- **senha (TEXT)** - Senha de acesso.
- **token_de_acesso (TEXT)** - Token de autenticação.
- **nivel (INT)** - Nível de acesso do usuário.
- **foto_de_perfil (LONGBLOB)** - Foto do perfil do usuário.
- **data_de_cadastro (DATETIME)** - Data de cadastro do usuário.

**Relacionamentos:**
- Um usuário pode ter várias notificações.
- Um usuário pode realizar várias inscrições.

### 2. **Notificacoes**
Armazena notificações enviadas para os usuários.

- **id_notificacao (INT)** - Chave primária.
- **data_da_notificacao (VARCHAR(100))** - Data da notificação.
- **descricao (VARCHAR(255))** - Descrição da notificação.
- **Usuarios_id_usuario (INT)** - Chave estrangeira referenciando `Usuarios`.

**Relacionamentos:**
- Cada notificação pertence a um único usuário.

### 3. **Inscricoes**
Registra as inscrições dos alunos nos cursos.

- **id_inscricao (INT)** - Chave primária.
- **nome_do_aluno (VARCHAR(255))** - Nome do aluno inscrito.
- **bilhete_de_identidade (LONGBLOB)** - Documento de identidade do aluno.
- **certificado (LONGBLOB)** - Certificado da inscrição.
- **aprovacao (VARCHAR(255))** - Status de aprovação.
- **curso (VARCHAR(255))** - Nome do curso.
- **data_de_inscricao (DATETIME)** - Data de inscrição.
- **id_usuario (INT)** - Chave estrangeira referenciando `Usuarios`.

**Relacionamentos:**
- Uma inscrição está associada a um único usuário.
- Uma inscrição pode ter vários comentários.

### 4. **Comentarios**
Armazena comentários sobre as inscrições.

- **id_comentario (INT)** - Chave primária.
- **message (VARCHAR(255))** - Conteúdo do comentário.
- **nome_da_entidade (VARCHAR(255))** - Nome da entidade que fez o comentário.
- **id_inscricao (INT)** - Chave estrangeira referenciando `Inscricoes`.
- **id_avaliador (INT)** - Chave estrangeira referenciando `Avaliadores`.

**Relacionamentos:**
- Um comentário pertence a uma inscrição e pode ser feito por um avaliador.

### 5. **Avaliadores**
Registra os avaliadores que podem comentar nas inscrições.

- **id_avaliador (INT)** - Chave primária.
- **licensa (VARCHAR(255))** - Número da licença.
- **data_de_emissao_da_licensa (VARCHAR(255))** - Data de emissão da licença.
- **data_de_expiracao_da_licensa (VARCHAR(255))** - Data de expiração da licença.
- **numero_de_telefone (VARCHAR(45))** - Número de telefone do avaliador.

**Relacionamentos:**
- Um avaliador pode fazer vários comentários.

### 6. **Calendarios**
Gerencia anúncios e datas dos cursos.

- **id_calendario (INT)** - Chave primária.
- **titulo_do_anuncio (VARCHAR(255))** - Título do anúncio.
- **data_de_termino (DATE)** - Data de término do curso.
- **requisitos (TEXT)** - Requisitos para participação.
- **id_curso (INT)** - Chave estrangeira referenciando `Cursos`.

**Relacionamentos:**
- Um calendário está associado a um único curso.

### 7. **Cursos**
Armazena informações sobre os cursos disponíveis.

- **id_curso (INT)** - Chave primária.
- **nome (VARCHAR(255))** - Nome do curso.
- **descricao (VARCHAR(255))** - Descrição do curso.
- **data_de_cadastro (DATETIME)** - Data de criação do curso.

**Relacionamentos:**
- Um curso pode estar associado a vários calendários.

## Considerações Finais
O banco de dados foi projetado para permitir a gestão eficiente das inscrições em cursos, garantindo controle sobre usuários, notificações, avaliações e comentários. Cada entidade foi estruturada para garantir integridade e escalabilidade do sistema.

