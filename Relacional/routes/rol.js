const express = require("express");
const rolRoutes = express.Router();
const rolModel = require("../models//rol");

rolRoutes.get("/", async (req, res) => {
    const data = await rolModel.findAll();

    res.json({ status: 200, data: data });
    }
);

rolRoutes.post("/create", async (req, res) => {
    const data = await rolModel.create(req.body);
  
    res.json({ status: 200, data });
  }
);

rolRoutes.get("/:id", async (req, res) => {
    const data = await rolModel.findOne({
      where: {
        id: req.params.id
      }
    });
  
    res.json({ status: 200, data })
  });

rolRoutes.put("/:id", async (req, res) => {
    const data = await rolModel.update(req.body, {
      where: {
        id: req.params.id
      }
    });
  
    res.json({ status: 200, data });
  });
  
rolRoutes.delete("/:id", (req, res) => {
    console.log("id", req.params.id);
  
    rolModel.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.json({ status: 200, data });
    });
  });

module.exports = rolRoutes;