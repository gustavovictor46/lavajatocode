## Requisitos

### 1.1 Requisitos Funcionais do Sistema

## 📋 Requisitos Funcionais

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RF01** | Realizar Login | Autentica usuário e senha, exibindo um alerta caso os dados estejam incorretos. |
| **RF02** | Exibir Tela Principal | Apresenta o nome do usuário conectado, o menu de navegação e a opção de logout. |
| **RF03** | Encerrar Sessão | Ao sair, o token de acesso é removido; caso contrário, expira automaticamente em 1 hora. |
| **RF04** | Cadastrar Cliente | Exige o preenchimento de nome e CPF, garantindo que não haja CPFs duplicados. |
| **RF05** | Consultar Cliente | Permite pesquisar clientes informando parte do nome ou do CPF. |
| **RF06** | Atualizar Cliente | Edita o nome e o CPF de um cliente existente a partir do seu identificador (`ID`). |
| **RF07** | Excluir Cliente | Remove o cadastro pelo `ID`, impedindo a exclusão caso existam veículos vinculados. |
| **RF08** | Cadastrar Veículo | Requer o modelo e o proprietário (cliente), sendo a placa de preenchimento opcional. |
| **RF09** | Atualizar Veículo | Modifica o modelo, a placa e o vínculo com o cliente utilizando o `ID` do veículo. |
| **RF10** | Excluir Veículo | Apaga o veículo pelo `ID`, bloqueando a operação se houver agendamentos associados. |
| **RF11** | Cadastrar Agendamento | Torna obrigatório informar a data e selecionar o veículo correspondente. |
| **RF12** | Listar Agendamentos | Exibe os registros em ordem cronológica, detalhando as informações do veículo e do cliente. |
| **RF13** | Atualizar Agendamento | Permite alterar a data e o veículo de um agendamento específico pelo seu `ID`. |
| **RF14** | Excluir Agendamento | Remove o registro pelo `ID` mediante confirmação prévia do usuário. |

### 1.2 Requisitos Não Funcionais

| ID | Requisito | Descrição |
| --- | --- | --- |
| RNF01 | Proteção de Dados | |
| RNF02 | Integridade dos Dados | |
| RNF03 | Controle de Acesso | |

## 2 Requisitos de Infraestrutura

| Tecnologia | Versão / ambiente |
| --- | --- |
| JavaScript | Node.js 24 |
| Next.js | 16 |
| React e React DOM | 19 |
| bcryptjs | 3 |
| jsonwebtoken | 9 |
| node:crypto | Integrado ao Node.js |
| PostgreSQL | 18 |
| Prisma e Prisma Client | 6 |
| Ant Design | 6 |
