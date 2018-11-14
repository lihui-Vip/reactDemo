import { Random } from 'mockjs';

import pack from '../pack';

module.exports = function (router) {
  router.post('/auth/login', (req, res) => {
    const data = {
      "token": "e10adc3949ba59abbe56e057f20f883e",
      "adminId": "12321321",
      "realName": "测试",
      "operId": "tst",
      "email": "tst@123.com",
    };
    setTimeout(() =>
      res.json(pack(data)),
      Random.natural(0, 2000),
    );
  });
};
