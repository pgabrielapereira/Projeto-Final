

# Psiqueer - API
Olá, este é meu trabalho de conclusão de curso em back-end da {reprograma}!
Esta API consiste em um armazenamento de profissionais da área da Psicologia, que tenham o foco do seu trabalho voltado para o público LGBTQIA+, que ofereçam esse serviço de forma gratuita ou a valores populares.

## Mais sobre a API Psiqueer 

Sabemos que, mesmo hoje com acesso a informação e em um mundo globalizado, algumas pessoas ainda tem muita dificuldade em acesso a alguns direitos básicos, tal qual a um cuidado com a saúde de qualidade. Sendo assim, o serviço de psicologia ainda não se tornou algo comum e que todos podem usufruir, principalmente os cidadãos de alguns recortes sociais, tais quais como gênero, cor, religião, renda, sexualidade ...

Pensando nisso a API Psiqueer foi desenvolvida com o intuito de cadastrar e armazenar os dados de profissionais de psicologia que tenham seu trabalho voltado em atender o público LGBTQIA+.

Na Schema com CRUD completo, é possível cadastrar, listar, buscar por localização e fazer alterações nos dados de cadastro.

## *Rotas - EndPoint*

### Todas as rotas existentes neste projeto:

| Verbo  |   EndPoint           |        Descrição da Rota                   | Status | 
| ------ | -------------------- | -------------------------------------------| ------ |
| GET    | /bairro              | Busca os profissionais por bairro         |   200  | 
| POST   | /add                 | Cadastra novo profissional             |   201  | 
| GET    | /all                 | Lista todos os profissionais               |   200  | 
| GET    | /:id                 | Busca profissionais por ID             |   200  | 
| PATCH  | /:id                 | Altera informações do cadastro do profissional     |   200  | 
| DELETE | /:id                 | Remove um profissional por ID                    |   200  |

Acesse [aqui] (https://psiqueer.onrender.com/minha-rota-de-documentacao/#/)a documentação. 

## Arquitetura MVC


  📁 Projeto-Final
  |       
  |-  📁 assets
  |-  📁 src  
  |    |- 📁 controller
  |         |- 📄 psiController.js  
  |    |- 📁 database 
            |- 📄 dbconnect.js    
  |    |- 📁 models  
  |         |- 📄 psiModels.js  
  |    |- 📁 routes  
  |         |- 📄 psiRoutes.js    
  |    |- 📄 app.js   
  |- 📁 Swagger    
  |         |- 📄 swagger_output.json           
  |           
  |-  📄 .env
  |-  📄 .env.example 
  |-  📄 .gitignore 
  |-  📄 package-lock.json   
  |-  📄 pakage.json 
  |-  📄 README.md 
  |-  📄 server.js
  |-  📄 Swagger.js
    
  
## Banco de dados
Para esta aplicação, utilizei o MongoAtlas DB em conjunto com a dependência mongoose.


### Contatos
Linkedin:
Insta: 

 



















Visualize a apresentação do [Projeto Psiqueer] (https://www.canva.com/design/DAFpwtuXbsk/6B4POaEjpmGGrvsD8IEgcg/view?utm_content=DAFpwtuXbsk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)