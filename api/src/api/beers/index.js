const Router = require("koa-router");
const ApiError = require("../../errors");
const beerModel = require("../../database/model/Beer");

const beersRouter = new Router();

beersRouter.get("/", async ctx => {
  try {
    ctx.body = await beerModel.list();
  } catch (err) {
    ctx.throw(
      new ApiError(err, {
        message: `Error retrieving beers`,
        statusCode: 400
      })
    );
  }
});

beersRouter.get("/:uuid", async ctx => {
  const uuid = ctx.params.uuid;
  try {
    ctx.body = await beerModel.get(uuid);
  } catch (err) {
    ctx.throw(
      new ApiError(err, {
        message: `Error retrieving beer with uuid "${uuid}"`,
        statusCode: 400
      })
    );
  }
});

beersRouter.post("/", async ctx => {
  const beerToAdd = ctx.request.body;
  try {
    ctx.body = await beerModel.add(beerToAdd);
  } catch (err) {
    ctx.throw(
      new ApiError(err, {
        message: `Error adding beer`,
        statusCode: 400
      })
    );
  }
});

beersRouter.put("/:uuid", async ctx => {
  const uuid = ctx.params.uuid;
  const beerToUpdate = ctx.request.body;
  try {
    ctx.body = await beerModel.update(uuid, beerToUpdate);
  } catch (err) {
    ctx.throw(
      new ApiError(err, {
        message: `Error updating beer with uuid "${uuid}"`,
        statusCode: 400
      })
    );
  }
});

beersRouter.post("/:uuid/rate", async ctx => {
  const uuid = ctx.params.uuid;
  const rate = ctx.request.body;
  try {
    ctx.body = await beerModel.rate(uuid, rate);
  } catch (err) {
    ctx.throw(
      new ApiError(err, {
        message: `Error rating beer with uuid "${uuid}"`,
        statusCode: err.statusCode || 400
      })
    );
  }
});

module.exports = beersRouter;
