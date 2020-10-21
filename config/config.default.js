/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603268689060_8346';

  // add your middleware config here
  config.middleware = [];

  config.logger ={
    dir: path.join(appInfo.baseDir, 'logs'),
  };

  config.view ={
     // 配置视图根路径
     root: path.join(appInfo.baseDir, 'app/view'),
     // 是否缓存路径
     cache: true,
     // 配置文件默认扩展名
     defaultExtension: '.nj',
     // 默认渲染模板引擎
     defaultViewEngine: 'nunjucks',
     // 文件映射配置
     mapping: {
      '.nj': 'nunjucks'
     }
  };

   // 多语言配置
  config.i18n = {
    // 默认语言，默认 "en_US"
    defaultLocale: 'zh-CN',
    // URL 参数，默认 "locale"
    queryField: 'locale',
    // Cookie 记录的 key, 默认："locale"
    cookieField: 'locale',
    // Cookie 的 domain 配置，默认为空，代表当前域名有效
    cookieDomain: '',
    // Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
    cookieMaxAge: '1y',
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
