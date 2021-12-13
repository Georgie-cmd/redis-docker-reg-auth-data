# Registration
 Microservice
So I forgot to add a comment how to use my simple microservice: 
the first step: open redis service with redis CLI
the second step: you need download my client-consumer
the third step: you must run microservice 'npm run start:dev' (in redis server you will see clients which have been connected: must be 4 - CLI: client, info, info, info)
the fouth step: lastly run consumer with 'npm run start:dev' (in redis server you will see 6 clients: client, pub, sub, info, client)
Okay and you can send any request in PostMan - some requests will show you cache in redis server - simple!

If you want to run docker-build with docker-compose up -- you need to change some strings in .development.env file REDIS_HOST=redis and POSTGRES_HOST=db - simple!
Enjoy...!
