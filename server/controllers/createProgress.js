const Progresso = require("../models/Progresso");

module.exports = async (req, res, next) => {

    const value = 0
    const progresso = new Progresso({
        value: value,
    });

    return progresso.save()
        .then(savedProgresso => {
            // const Id = savedProgress._id.valueOf();
            return res.json({user: savedProgresso})
        })
        .catch(err => {
            return res.json({message: err})
        })
}



