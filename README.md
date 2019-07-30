# ebaySearchAPI
  Uma integração com a API de busca do eBay para permitir que usuários recebam alertas sobre promoções referentes a produtos específicos.  
 
 A utilização é simples:
 - Diga sobre qual produto quer receber notificações :D (essa é a SearchPhrase)
 - Informe seu e-mail
 - Selecione o intervalo que deseja receber as notificações (a cada 2, 10 ou 30 minutos)
 
 E Voilá! Tudo mágicamente funcionando :D  
 
 Assim que você criar o alerta no belo front em _ReactJS_, ele será mandado para o _NodeJS_, que salvará o alerta em _MongoDB_
 
 Após isso, o _Cron_ fará a gentileza de se certificar que o _Nodemailer_ irá te comunicar sobre os 3 produtos mais baratos trazidos diretamente pelo _Axios_ da _eBay Search API_ a cada 2, 10 ou 30 minutos.
 
 
 Agora você deve estar se perguntando: Nossa, que trabalheira. E pra subir tudo isso?
 
 E é aí que eu respondo: Relaaaxa, com uma linha de código nosso caro _Docker Compose_ sobe todos os Containers necessários :D

## To set up the project:
  1. configure the environment variables at _docker-compose.yml_ (nessa época eu não conhecia as maravilhas do .env, sorry)
  2. in the same directory as _docker-compose.yml_, run the command `docker-compose up --build`
  3. that's it! :D Just enjoy the eBay deals setting alarms in a beautiful React interface at localhost:3000 
