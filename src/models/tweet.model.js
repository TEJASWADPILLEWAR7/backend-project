import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
  {
    consttent: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model;
