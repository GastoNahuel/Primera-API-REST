const express = require("express");
const route = express.Router();
const rolModel = require("../schemas/rol");

route.get(`/`, (req, res) => {
    rolModel.find({}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data });
    });
}
);

route.get('/:id', (req, res) => {
    rolModel.find({ id: req.params.id }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data });
    });
});

route.post("/create", (req, res) => {

    const user = new rolModel(req.body);

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
    rolModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

route.put("/:id", (req, res) => {
    rolModel.findOneAndUpdate(
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