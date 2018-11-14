import ip from 'ip';
import Express, { Router } from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../../config/webpack.dev';

const app = new Express();

app.post('/auth/login', (req, res) => {
  const data = {
    "token": "e10adc3949ba59abbe56e057f20f883e",
    "adminId": "12321321",
    "realName": "测试",
    "operId": "tst",
    "email": "tst@123.com",
  };
  setTimeout(() => res.json(data), 1500);
});

app.use(webpackMiddleware(webpack(webpackConfig), {
  quiet: true,
  stats: {
    colors: true,
    modules: false,
  },
}));

app.listen(3003, () => console.log(`Listening on http://${ip.address()}:3003/`));
