const express = require('express')
const router = express.Router()
const player = require('../models/player')

// Getting all
router.get('/', async (req, res) => {
  try {
    const players = await player.find()
    res.json(players)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getplayer, (req, res) => {
  res.json(res.player)
})

// Creating one
router.post('/', async (req, res) => {
  const player = new player({
    name: req.body.name,
    subscribedPlayer: req.body.subscribedPlayer
  })
  try {
    const newplayer = await player.save()
    res.status(201).json(newplayer)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getplayer, async (req, res) => {
  if (req.body.name != null) {
    res.player.name = req.body.name
  }
  if (req.body.subscribedPlayer != null) {
    res.player.subscribedPlayer = req.body.subscribedPlayer
  }
  try {
    const updatedplayer = await res.player.save()
    res.json(updatedplayer)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getplayer, async (req, res) => {
  try {
    await res.player.remove()
    res.json({ message: 'Deleted Player' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


async function getplayer(req, res, next) {
  let player
  try {
    player = await player.findById(req.params.id)
    if (player == null) {
      return res.status(404).json({ message: 'Cannot find player' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.player = player
  next()
}

module.exports = router