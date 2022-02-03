const Words = require('../models/words');

const getWord = async (req, res) => {
    try {
        const word = await Words.findOne({ serial: req.params.serial });
        if (!word) {
            return res.status(404).send("Not found!");
        }
    return res.send(word.word);
    } catch (error) {
        res.send(error.message);
    }
}

const checkWord = async (req, res) => {
    try {
        let word = await Words.findOne({ word: req.params.word });
        if (!word) {
            return res.status(404).send("Word not found!");
        }
        return res.send(word);    
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = {
    getWord,
    checkWord
}


