'use strict';

exports.getDbConnectSetting = function () {

  let env = 'dev';
  if ('prod' === process.env.STAGE) {
    env = process.env.STAGE;
  }
  const config = {
    dev: {
      host:'13.229.56.107',
      database: 'guard',
      user: 'postgres',
      password: 'nguyen123456',
      port: '5432',
    },
    prod: {
      host:'saxasecdb.cmpukynjdd8u.ap-northeast-1.rds.amazonaws.com',
      database: 'saxasec',
      user: 'saxasec',
      password: 'ta6!L#irwyjC',
      port: '5432',
    }
  };
  return config[env];
};
