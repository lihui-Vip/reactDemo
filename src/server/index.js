import ip from 'ip';
import Express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../../config/webpack.dev';

const app = new Express();

app.use(webpackMiddleware(webpack(webpackConfig), {
  quiet: true,
  stats: {
    colors: true,
    modules: false,
  },
}));

app.listen(3003, () => console.log(`Listening on http://${ip.address()}:3003/`));
