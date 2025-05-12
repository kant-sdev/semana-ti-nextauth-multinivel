# Portal de Exames Médicos

Este projeto é um portal de exames médicos desenvolvido com Next.js, permitindo que pacientes visualizem seus resultados e médicos gerenciem os exames de seus pacientes.

## Sobre o Projeto

🏥 **Mediexam — Portal de Exames Médicos**

Mediexam é uma aplicação web desenvolvida com Next.js que oferece um portal seguro para acesso e gerenciamento de exames médicos, com autenticação robusta e fluxos personalizados para pacientes e médicos. O sistema implementa autenticação multinível, verificação de dois fatores (2FA) e controle de acesso baseado em funções (RBAC).

### ✨ Funcionalidades Principais

- **🔐 Autenticação com NextAuth.js**: Utiliza o credentials provider para autenticação segura.
- **🔁 Fluxos Distintos de Login**: Pacientes e médicos têm fluxos personalizados, com redirecionamento automático para dashboards específicos.
- **✅ Verificação em Duas Etapas (2FA)**:
  - E-mail (para pacientes)
  - TOTP (para médicos - configurável)
- **🧠 Controle de Sessão**: Utiliza JWT com metadados adicionais como role, mfaType e status de 2FA.
- **🧭 Proteção de Rotas**: Middleware inteligente impede acesso a áreas restritas sem 2FA.
- **🍪 Persistência Temporária**: Utiliza cookies para manter a verificação temporária.
- **📦 Estrutura Modular**: Separação clara entre responsabilidades (api, auth, components, etc).

## Funcionalidades

- **Autenticação**: Login seguro com validação de credenciais e suporte a MFA.
- **Dashboard do Paciente**: Visualização de todos os exames médicos do paciente.
- **Dashboard do Médico**: Gerenciamento de pacientes e seus exames, com opção para adicionar novos exames.

## Contas Demo

Para facilitar o acesso, utilize as seguintes contas:

- **Paciente**: alice@paciente.com / 123456
- **Médico**: dr.bob@medico.com / 123456

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento web.
- **React**: Biblioteca para construção de interfaces.
- **NextAuth**: Autenticação e gerenciamento de sessão.
- **Zod**: Validação de formulários.
- **TailwindCSS**: Estilização e design responsivo.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.

## Estrutura do Projeto

- **src/app**: Contém as rotas e páginas da aplicação.
  - **(public)**: Páginas públicas, como login e autenticação.
  - **(private)**: Páginas privadas, como dashboards de pacientes e médicos.
- **src/components**: Componentes reutilizáveis da aplicação.
- **src/lib**: Funções utilitárias e lógica de negócio.
- **src/providers**: Provedores de contexto e configurações globais.
- **src/types**: Definições de tipos TypeScript.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd medical-exams
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Deploy

O projeto pode ser facilmente implantado na [Vercel](https://vercel.com), plataforma recomendada para aplicações Next.js.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
