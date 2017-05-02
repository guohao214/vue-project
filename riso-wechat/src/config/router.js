/**
 * Created by Guohao on 2017/5/2.
 */
module.exports = {
  '/coupon/list': function (req, res) {
    res.json({
        valid: [
          {
            amount: 100,
            name: 'RISO FRESH 抵用券',
            description: '生鲜满200减600',
            useTime: '2017-02-01~2019-05-16',
            status: 0
          },
          {
            amount: 200,
            name: 'RISO FRESH 抵用券',
            description: '生鲜满200减600',
            useTime: '2017-02-01~2019-05-16',
            status: 1
          }],
        invalid: [
          {
            amount: 600,
            name: 'RISO FRESH 抵用券',
            description: '生鲜满200减600',
            useTime: '2017-02-01~2019-05-16',
            status: 2
          },
          {
            amount: 200,
            name: 'RISO FRESH 抵用券',
            description: '生鲜满200减600',
            useTime: '2017-02-01~2019-05-16',
            status: 2
          },
          {
            amount: 300,
            name: 'RISO FRESH 抵用券',
            description: '生鲜满200减600',
            useTime: '2017-02-01~2019-05-16',
            status: 2
          }
        ]
      }
    )
  }
}
