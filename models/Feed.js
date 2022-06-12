const { model, Schema } = require("mongoose");

const FeedSchema = new Schema({
  title: String,
  image: String,
  description: String,
  tags: [String],
  userid: String,
});

const Feed = model("Feed", FeedSchema);

module.exports = Feed;
