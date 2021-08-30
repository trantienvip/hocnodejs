module.exports = {
  mutipleMongooseToOject: function (mongooses) {
    return mongooses.map((mongooses) => mongooses.toObject());
  },
  MongooseToOject: function (mongooses) {
    return mongooses ? mongooses.toObject() : mongooses;
  },
};
