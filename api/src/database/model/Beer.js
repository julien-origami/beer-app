const yup = require("yup");
const uuidV4 = require("uuid/v4");
const db = require("../lowdb");

const COLLECTION_NAME = "beers";

const beerSchema = yup.object().shape({
  name: yup.string().required(),
  ibu: yup
    .number()
    .positive()
    .integer(),
  rate: yup
    .number()
    .positive()
    .integer()
});

const rateSchema = yup.object().shape({
  score: yup
    .number()
    .min(1)
    .max(10)
    .required()
});

db.defaults({ [COLLECTION_NAME]: [] }).write();

module.exports = {
  async list() {
    return db.get(COLLECTION_NAME).value();
  },
  async get(uuid) {
    return db
      .get(COLLECTION_NAME)
      .find({ uuid })
      .value();
  },
  async add(beer) {
    await beerSchema.validate(beer);
    const newBeer = { uuid: uuidV4(), score: 0, nbRate: 0, ...beer };
    db.get(COLLECTION_NAME)
      .push(newBeer)
      .write();
    return newBeer;
  },
  async update(uuid, beer) {
    return db
      .get(COLLECTION_NAME)
      .find({ uuid })
      .assign({ ...beer })
      .write();
  },
  async rate(uuid, rate) {
    const beerToRate = await this.get(uuid);
    if (!beerToRate) {
      throw new ApiError(new Error(`Beer with id "${uuid}" not found`), {
        statusCode: 404
      });
    }
    await rateSchema.validate(rate);
    const { nbRate, score } = beerToRate;
    const newNbRate = nbRate + 1;
    return await this.update(uuid, {
      score: (score * nbRate + rate.score) / newNbRate,
      nbRate: newNbRate
    });
  }
};
