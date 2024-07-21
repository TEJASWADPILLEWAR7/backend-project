import mongoose, { Schema, Types } from "mongoose";

const playlistSchema = new Schema(
  {
    name: {
      Types: String,
      required: true,
    },
    videos: {
      type: String,
      required: true,
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
