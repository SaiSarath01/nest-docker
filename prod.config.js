/* eslint-disable prettier/prettier */
module.exports = {
  apps: [
    {
      name: 'test-docker',
      script: './dist/main.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      env: {
        name: 'test-docker',
        NODE_ENV: 'production',
      },
    },
  ],
};
