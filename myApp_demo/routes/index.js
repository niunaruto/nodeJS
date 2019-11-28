const router = require('koa-router')()
const mysql = require('mysql')
const { query } = require('../utils/query')
const {
  CREATE_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE
} = require('../utils/sql')

// 初始化数据库，创建表


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
router.get('/string', ctx => {
  return new Promise(resolve => {
    var sql = 'select * from product_exchange_rate';
    query(sql,function (error, results, fields) {
      if (error) throw error;
      ctx.body = {
        code: 1,
        msg: results
      }
      resolve();
    })
  })
})

router.get('/promotionList',ctx =>{
  return new Promise(resolve => {
    var sql = 'select * from promotion';
    query(sql,function (error, results, fields) {
      ctx.body = {
        code: error?0:1,
        data: error?error:results
      }
      resolve();
    })
  })
})



router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router