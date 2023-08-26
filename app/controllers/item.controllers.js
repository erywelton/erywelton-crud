const db = require("../models");
const Item = db.item;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            messege: "O conteúdo não pode ser vazio!"
        });
        return;
}

const item = {

        name: req.body.name,
        description: req.body.description,
        quantify: req.body.quantify,
        is_flammable: req.body.is_flammable ? 
        req.body.is_flammable : false
}

    Item.create(item)
        .then(data => {
            res.send(data);
        })
        .cath(err => {
            res.status(500).send({
                Message:
                err.Message || "Ocorreu um erro ao criar o item."
        })
    })
};

exports.findAll = (req, res) => {
        const name = req.body.name;
        var condition = name ? {
            name: { [Op.like]: `%${name}% `}} : null;

    items.findAll({ where: condition})
        .then(data => {
            res.send(data);
        })
        .cath(err => {
            res.status(500).send({
                Message:
                err.Message || "Ocorreu um erro ao listar os itens."
    })
})
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllFlammabes = (req, res) => {

};




