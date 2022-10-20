const router = require('express').Router();
const { User, Characters } = require('../../models');

//get the character & data
router.get('/:id', async (req, res) => {
  try {
    const characterData = await Characters.findByPk(req.params.id, {
      // include: [{ model: User,}],
    });

    if (!characterData) {
      res.status(404).json({ message: 'no character found with that id!' });
    }
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
  //grab character data and pass to front end in res
});

//update strength
router.put('/:id', (req, res) => {
  console.log('help', req.params);
  Characters.update(
    {
      strength: req.body.strength,
    },
    {
      returning: true,
      where: {
        id: req.params.id,
      },
    }
  )
    .then(([rowsUpdated, [updatedCharacter]]) => {
      console.log(updatedCharacter);
      res.json(updatedCharacter);
    })
    .catch((err) => res.json(err));
});

// router.post('/updateCharacter/:user_id', (req, res) => {
//   //todo: get user from session using passport/express whatever,
//   //after u have user,grab id of user and use that to update the character

//   const [updatedRows] = await;
//   Characters.update(
//     {},
//     {
//       where: { x: null },
//     }
//   );
// });

module.exports = router;