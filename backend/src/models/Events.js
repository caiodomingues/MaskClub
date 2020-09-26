const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    like: {
      type: String,
    },
    dislike: {
      type: String,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

EventSchema.virtual("url").get(function () {
  const url = process.env.URL || "http://localhost:3333";

  return `${url}/events/${encodeURIComponent(this.filePath)}`;
});

EventSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Events", EventSchema);
