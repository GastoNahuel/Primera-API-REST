const express = require("express");
const taskRoutes = express.Router();
const taskModel = require("../models/task");

taskRoutes.get("/", async (req, res) => {
    const data = await taskModel.findAll();

    res.json({ status: 200, data: data });
    }
);

taskRoutes.post("/create", async (req, res) => {
    const data = await taskModel.create(req.body);
  
    res.json({ status: 200, data });
  }
);

taskRoutes.get("/:id", async (req, res) => {
    const data = await taskModel.findOne({
      where: {
        id: req.params.id
      }
    });
  
    res.json({ status: 200, data })
  });

taskRoutes.put("/:id", async (req, res) => {
    const data = await taskModel.update(req.body, {
      where: {
        id: req.params.id
      }
    });
  
    res.json({ status: 200, data });
  });
  
taskRoutes.delete("/:id", (req, res) => {
    console.log("id", req.params.id);
  
    taskModel.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.json({ status: 200, data });
    });
  });

module.exports = taskRoutes;