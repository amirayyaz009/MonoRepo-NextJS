import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { typeDefs } from './graphql/type-defs';

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: {
      Todo: {
        user: () => ({ name: 'User 1' }),
      },
      Query: {
        getTodos: () => ({ title: 'Do Something' }),
        getAllUsers: () => [{ name: 'User 1' }],
        getUser: () => ({ name: 'User 1' }),
      },
    },
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use('/graphql', expressMiddleware(server));

  const PORT = parseInt(process.env.PORT || '5000', 10);
  app.listen(PORT, () => console.log(`Serevr Started at PORT ${PORT}`));
}

startServer();
