# Psiqueer - API
<h1 align="center">
  <img src="assets/Premium Vector _ The super brain flies on the sky under the rainbow of illustration.jpeg" alt="descrição" width="400">
</h1>

Olá, este é meu trabalho de conclusão de curso em back-end da {reprograma}!
Esta API consiste em um armazenamento de profissionais da área da Psicologia, que tenham o foco do seu trabalho voltado para o público LGBTQIA+, que ofereçam esse serviço de forma gratuita ou a valores populares.

## Mais sobre a API Psiqueer 

Sabemos que, mesmo hoje com acesso a informação e em um mundo globalizado, algumas pessoas ainda tem muita dificuldade em acessar alguns direitos básicos, como o cuidado com a saúde, por exemplo. Posto isso, o serviço de psicologia ainda não se tornou algo comum e que todos podem usufruir, principalmente a população de camadas sociais mais invisíveis.

Pensando nisso, a API Psiqueer foi desenvolvida com o intuito de cadastrar e armazenar os dados de profissionais da área de psicologia que tenham seu trabalho voltado em atender o público LGBTQIA+.

O nome Psiqueer é um trocadilho juntando os termos Psique que seria alma, e o termo guarda-chuva queer, que depois de ter sido muito utilizado no sentido pejorativo, hoje abarcam as minorias no sentido de sexualidade e gênero , ou seja, pessoas que não são heterossexuais ou não são cisgenero. 

Através da Schema, que possui CRUD completo, é possível cadastrar, listar, buscar por localização e fazer alterações nos dados de cadastro.

## *Rotas - EndPoint*

<h1 align="center">
  <img src="assets/♡ cola&apos;s pink gif blog ♡ (1).gif" alt="descrição" width="400">
</h1>

### Todas as rotas existentes neste projeto:

| Verbo  |   EndPoint           |        Descrição da Rota                   | Status | 
| ------ | -------------------- | -------------------------------------------| ------ |
| GET    | /bairro              | Busca os profissionais por bairro         |   200  | 
| POST   | /add                 | Cadastra novo profissional             |   201  | 
| GET    | /all                 | Lista todos os profissionais               |   200  | 
| GET    | /:id                 | Busca profissionais por ID             |   200  | 
| PATCH  | /:id                 | Altera informações do cadastro do profissional     |   200  | 
| DELETE | /:id                 | Remove um profissional por ID                    |   200  |

Acesse [aqui](https://psiqueer.onrender.com/minha-rota-de-documentacao/#/) a documentação. 

<h1 align="center">
  <img src="assets/Down the color wheel with Merrigo.gif" alt="descrição" width="400">
</h1>

## Arquitetura MVC


 
  📁 Projeto_Final          
  |- 📁 cadastro_psi            
  |- 📁 assets          
  |- 📁 src  
  |    |- 📁 controller     
  |         |- 📄 consultorioController.js  
  |    |- 📁 database           
  |- 📄 dbconnect.js    
  |    |- 📁 models  
  |         |- 📄 consultoriosModel.js  
  |    |- 📁 routes  
  |         |- 📄 consultoriosRoute.js    
  |    |- 📄 app.js   
  |- 📁 Swagger    
  |         |- 📄 swagger_output.json           
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
[Linkedin](https://www.linkedin.com/in/gabriela-pereira-494071240/)

[Insta](https://www.instagram.com/p.gabrielapereira/)

 
Visualize a apresentação do [Projeto Psiqueer](https://www.canva.com/design/DAFpwtuXbsk/6B4POaEjpmGGrvsD8IEgcg/view?utm_content=DAFpwtuXbsk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)


<h1 align="center">
  <img src="assets/download (4).jpeg" alt="descrição" width="300">
</h1>