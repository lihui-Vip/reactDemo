import ip from 'ip';
import webpack from 'webpack';
import bodyParser from 'body-parser';
//body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。
//app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
import Express, { Router } from 'express';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../../config/webpack.dev';

const app = new Express();

// login
const loginRouter = new Router();
require('./logic/login')(loginRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginRouter);

app.use(webpackMiddleware(webpack(webpackConfig), {
  quiet: true,
  stats: {
    colors: true,
    modules: false,
  },
}));

app.listen(3003, () => console.log(`Listening on http://${ip.address()}:3003/`));
