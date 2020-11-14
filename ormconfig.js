module.exports = {
  type: 'mysql',
  url: 'mysql://root:mysql@4.tcp.ngrok.io:13197/examen',
  migrations: ['dist/app/infra/migrations/*.js', 'app/infra/migrations/*.js'],
  cli: {
    migrationsDir: './app/infra/migrations',
  },
  migrationsRun: true,
  logging: true,
  timezone: '+0',
  entities: [
    'dist/**/command/infra/persistence/typeorm/entities/**.typeorm.js',
    '**/command/infra/persistence/typeorm/entities/**.typeorm.js',
  ],
};
