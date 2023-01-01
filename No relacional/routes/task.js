const express = require("express");
const route = express.Router();
const taskModel = require("../schemas/task");

route.get(`/`, (req, res) => {
    taskModel.find({}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data });
    });
}
);

route.get('/:id', (req, res) => {
    taskModel.find({ id: req.params.id }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data });
    });
});

route.post("/create", (req, res) => {

    const user = new taskModel(req.body);

    user
        .save()
        .then((document) => {
            res.json({ status: 200, data: document });
        }).catch((error) => {
            res.json({ status: 500, data: error });
        });
}
);

route.delete("/:id", (req, res) => {
    taskModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

route.put("/:id", (req, res) => {
    taskModel.findOneAndUpdate(
        { id: req.params.id }, req.body, 
        {
            new: true
        },
         (error, data) => {
            if (error) {
                res.json({ status: 500, data: error });
            }

            res.json({ status: 200, data });
        }
    );
});

module.exports = route;