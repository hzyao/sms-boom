const App = require('./app/app');
const QQProvider = require('./app/providers/qq');
const AliyunProvider = require('./app/providers/aliyun');
const TaobaoProvider = require('./app/providers/taobao');

new App(13377175342)
  .provider(QQProvider)
  .provider(AliyunProvider)
  .provider(TaobaoProvider)
  .bootstrap();