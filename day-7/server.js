const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1);

  await next()

  console.log(2);
  ctx.body += ' last mid';
});

app.use(async (ctx, next) => {
  console.log(11);

  await next()

  console.log(22);
});

app.use(async ctx => {
  console.log(3);

  ctx.body = 'Hello World';

  console.log(4);
});

app.listen(3000);