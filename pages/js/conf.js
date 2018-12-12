function env (name, defaultValue) {
  // in prod mode, name be replace by envsubst
  return name.startsWith('$') || name === ''
    ? defaultValue
    : typeof defaultValue === 'number'
    ? Number(name)
    : name
}

// MongoRest连接配置
var MongoConfig = {
  ftrace: {
    database: env('$AG_MONGO_APP_DATABASE', 'ftrace'),
    base: env('$AG_MONGO_APP_BASE', 'http://mongo.dev.agrithings.cn:29000')
  }
}
// 支撑平台服务的配置参数
var IssServerConfig = {
  server: env('$AG_ISS_SERVER', 'http://iss.dev.agrithings.cn:28100'),
  server1: env('$AG_ISS_SERVER_PWD', 'http://iss.dev.agrithings.cn:28100')
}
// OAUTH2服务连接参数
var OAuth2Config = {
  clientId: env('$AG_OAUTH2_CLIENT_ID', 'ftrace-front'),
  server: env('$AG_OAUTH2_SERVER', 'http://oauth2.dev.agrithings.cn:29300')
}
