const Words = require('../models/words');

const getWord = async (req, res) => {
    const word = await Words.findOne({ serial: req.params.serial });
    if (!word) {
        return res.status(404).send("Not found!");
    }
    return res.send(word.word);
}

const checkWord = async (req, res) => {
    console.log(`Its here ${req.params.word}`)
    let word = await Words.find({ word: req.params.word });
    if (!word) {
        return res.status(404).send("Word not found!");
    }
    return res.send(word);
}

module.exports = {
    getWord,
    checkWord
}


