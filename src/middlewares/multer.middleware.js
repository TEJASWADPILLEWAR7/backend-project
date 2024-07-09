import multer from "multer";
import express from "express";

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date() + "VideoTube");
  },
});

export const upload = multer({ storage });
