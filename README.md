# README - Sistema de Inscrição do 30 de Setembro

## Visão Geral
O "Sistema de Inscrição do 30 de Setembro" é uma plataforma desenvolvida para facilitar o processo de inscrição, gestão e administração das candidaturas dentro de um sistema acadêmico ou institucional. Este documento descreve os principais casos de uso do sistema, conforme representado no diagrama de caso de uso.

## Atores
O sistema possui três atores principais:
- **Candidato**: Usuário que deseja realizar uma inscrição na plataforma.
- **Administrador**: Responsável pela gestão do sistema, incluindo administração de funcionários e supervisão das inscrições.
- **Avaliador**: Responsável por aprovar ou reprovar inscrições.

## Casos de Uso

### Para o Candidato:
1. **Ver informações sobre a plataforma**
2. **Fazer Login** (com exibição de mensagens de erro e sucesso)
3. **Criar Conta** (com exibição de mensagens de erro e sucesso)
4. **Ver calendário de Inscrição**
5. **Submeter candidatura**
6. **Gerir inscrições**, incluindo:
   - Cancelar inscrição
   - Editar inscrição
   - Visualizar processo de aprovação
7. **Gerir definições**, incluindo:
   - Alterar dados gerais
   - Alterar credenciais

### Para o Administrador:
1. **Fazer Login** (com exibição de mensagens de erro e sucesso)
2. **Visualizar status do sistema**
3. **Visualizar funcionários**
4. **Gerir funcionários**, incluindo:
   - Cadastrar funcionário
   - Editar funcionário
   - Eliminar funcionário
5. **Supervisionar inscrições**
6. **Gerar relatórios e gráficos**
7. **Comentar uma inscrição**
8. **Gerir definições**, incluindo:
   - Alterar dados gerais
   - Alterar credenciais

### Para o Avaliador:
1. **Gerir inscrições**, incluindo:
   - Aprovar inscrições
   - Reprovar inscrições

## Extensões e Incluídos
- Algumas funcionalidades dependem de outras e são marcadas como **extends** (extensão) ou **includes** (inclusão) no diagrama.

## Conclusão
Este sistema permite que candidatos realizem inscrições de maneira eficiente, enquanto administradores e avaliadores gerenciam o processo de aprovação de forma organizada e estruturada.