const router = require('express').Router();
const { User, Characters } = require('../../models');

//get the character & data
router.get('/getCharacter/:user_id', async (req, res) => {
    try {
        const characterData = await Characters.findByPk(req.params.id, {
            include: [{ model: User, Characters}],
        });
        
        if (!characterData) {
            res.status(404).json({ message: 'no character found with that id!'});
        }
        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err);
    }
  //grab character data and pass to front end in res
});

router.post('/updateCharacter/:user_id', (req, res) => {
  //todo: get user from session using passport/express whatever,
  //after u have user,grab id of user and use that to update the character

  const [updatedRows] = await;
  Characters.update(
    {},
    {
      where: { x: null },
    }
  );
});

module.exports = router;