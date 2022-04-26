export default {
  dev: process.env.NODE_ENV === 'development',
  prod: process.env.NODE_ENV === 'production',
  staging: process.env.NODE_ENV === 'staging',
  test: process.env.NODE_ENV === 'test',
};
