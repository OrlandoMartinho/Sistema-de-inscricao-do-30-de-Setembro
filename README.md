
# 📘 Sistema de Gestão de Registros Educacionais

Este projeto é um sistema de gestão para instituições de ensino, permitindo o gerenciamento de usuários, cursos, inscrições, calendários, notificações e muito mais. O sistema foi modelado com base em um diagrama de classes UML, refletindo a estrutura de dados e os principais comportamentos do sistema.

---

## 📂 Estrutura do Sistema

### 🔐 **Usuários**
Responsáveis por acessar e interagir com o sistema.
- Atributos: `id_usuario`, `senha`, `token_de_acesso`, `foto_de_perfil`
- Métodos: `cadastrar()`, `autenticar()`, `editar()`, `visualizar()`, `visualizar_todos()`, `alterar_palavra_passe()`, `alterar_email()`, `carregar_foto_de_perfil()`

---

### 📚 **Cursos**
Representam as formações ou programas disponíveis na instituição.
- Atributos: `id_curso`, `descricao`, `area`, `duracao`, `numero_de_vagas`
- Métodos: `cadastrar()`, `eliminar()`, `editar()`, `visualizar()`, `visualizar_todos()`

---

### 📆 **Calendários**
Gerenciam datas importantes relacionadas aos cursos.
- Atributos: `id_calendario`, `titulo_do_anuncio`, `data_de_termino`, `id_curso`
- Métodos: `cadastrar()`, `eliminar()`, `editar()`, `visualizar()`, `visualizar_todos()`

---

### 🧾 **Inscrições**
Armazenam as informações dos alunos inscritos.
- Atributos: `id_inscricao`, `idade`, `genero`, `numero_do_processo`, `nome_completo`, `contacto_do_aluno`, `contacto_do_encarregado`, `id_calendario`, `data_de_nascimento`, `natural_de`, `provincia`, `tipo_de_identificacao`, `numero_de_identificacao`, `arquivo_de_identificacao`, `foto_tipo_passe`, `classe`, `turno`, `aprovacao`, `comentario`
- Métodos: `registrar()`, `editar()`, `eliminar()`, `visualizar()`, `visualizar_todos()`, `aprovar()`

---

### 📣 **Notificações**
Notificações enviadas aos usuários.
- Atributos: `id_notificacoes`, `data_de_notificacao`, `id_usuario`
- Métodos: `adicionar()`, `deletar()`, `visualizar_por_usuario()`, `marcar_como_lido()`

---

### ✉️ **Contactos**
Formulário de contato para mensagens e dúvidas.
- Atributos: `id_contacto`, `nome`, `email`, `assunto`, `mensagem`, `respondido`, `data_de_resposta`
- Métodos: `cadastrar()`, `eliminar()`, `visualizar_um()`, `visualizar_todos()`, `responder()`

---

### 🖼️ **Galeria**
Armazena eventos e imagens institucionais.
- Atributos: `id_galeria`, `titulo`, `data_do_evento`, `descricao`
- Métodos: `cadastrar()`, `editar()`, `eliminar()`, `visualizar_um()`, `visualizar_todos()`

---

### 📌 **Registros (Classe Abstrata)**
Classe base que define atributos comuns a várias entidades.
- Atributos protegidos: `nome`, `data_de_criacao`

---

### 📎 **Outros Registros**
Entidade genérica para registros adicionais.
- Atributos: `descricao`, `data_de_criacao`

---

### 🎯 **Critérios**
Armazena critérios diversos do sistema.
- Atributos: `data_de_criacao`

---

## 🛠️ Tecnologias Sugeridas
- **Backend**: Node.js, Fastify, ou Django
- **Frontend**: React, Next.js ou simples HTML/CSS/JS
- **Banco de Dados**: PostgreSQL, MySQL ou MongoDB
- **Armazenamento de Arquivos**: AWS S3, Firebase Storage, ou servidor local

---

## 📈 Possíveis Extensões Futuras
- Painel de administração com gráficos de estatísticas
- Sistema de autenticação com múltiplos níveis de acesso
- Notificações por email ou SMS
- Exportação de dados em PDF/Excel
