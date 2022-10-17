const express = require('express')
const router = express.Router()
const Character = require('../models/character')

// Getting all
router.get('/', async (req, res) => {
  try {
   const characters = await Character.find()
   res.json(characters)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getcharacter, (req, res) => {
  res.json(res.character)
})


async function getcharacter(req, res, next) {
  let character
  try {
    character = await character.findById(req.params.id)
    if (character == null) {
      return res.status(404).json({ message: 'Cannot find player' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.character = character
  next()
}

module.exports = router
