const Event = require("../models/Events");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const upload = require("../config/upload");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const events = await Event.paginate(
      {},
      { page, limit: 10, sort: { createdAt: -1 } }
    );
    return res.json(events);
  },

  async show(req, res) {
    const { id } = req.params;
    const events = await Event.findById(id);
    return res.json(events);
  },

  async store(req, res) {
    try {
      const { name, address, description } = req.body;
      const file = req.files ? req.files[0] : req.file;
      const events = await Event.create({
        name,
        address,
        description,
        fileName: file ? file.originalname : "NULL",
        filePath: file ? file.key : "NULL",
        like: 0,
        dislike: 0,
      });
      await events.save();
      return res.json(events);
    } catch (err) {
      return res.status(400).send({ error: "Error creating new Event" });
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const events = await Event.findById(id);
      fs.unlink(`./uploads/${events.filePath}`, function (err) {
        if (err) return res.json({ message: err });
        events.remove();
        return res.json({ message: "Deleted successfully" });
      });
    } catch (err) {
      return res.status(400).send({ error: "Error deleting" });
    }
  },

  async likeDislike(req, res) {
    try {
      const { id } = req.params;
      const events = await Event.findByIdAndUpdate(id, { $set: req.body });
      return res.json(events);
    } catch (err) {
      return res.status(400).send({ error: "Error updating" });
    }
  },
};
