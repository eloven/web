export default () => ({
  HOST: 'http://localhost',
  PORT: parseInt(process.env.PORT, 10) || 3000,
  MONGO_URI: 'mongodb://localhost:27017/nest-server',
  JWT_KEY: 'NEST_JWT_KEY',
  ENV: process.env.NODE_ENV || 'development'
});
