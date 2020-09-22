import { createConnection, getConnectionOptions, Connection } from 'typeorm';

// createConnection();
export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database: 'bd_recipes',
    }),
  );
};
// createConnection({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'docker',
//   database: 'recipes',
//   entities: [__dirname + '/entity/*.js'],
//   synchronize: true,
//   migrations: ['./src/database/migrations/*.ts'],
//   cli: {
//     migrationsDir: '/src/database/migrations',
//   },
// })
//   .then(connection => {
//     // here you can start to work with your entities
//   })
//   .catch(error => console.log(error));
