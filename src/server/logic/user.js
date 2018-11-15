import Mock, { Random } from 'mockjs';
import _ from 'underscore';

import pack from '../pack';

module.exports = function (router) {
  router.get('/user/list', (req, res) => {

    const result = _.map(_.range(0, 10), (v, i) => Mock.mock({
      "id": i,
      "name": Random.name(),
      "status": 1,
      "gender|1": [
        '男',
        '女',
      ],
      "age": Random.integer(0, 100),
    }));

    setTimeout(() => res.json(pack(result)), Random.natural(0, 2000));
  });
  router.delete('/user/del/:id', (req, res) => {
    setTimeout(() => res.json(pack({ data: 0 })), Random.natural(0, 2000));
  });
};
