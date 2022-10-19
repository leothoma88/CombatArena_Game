const router = require('express').Router();
const { Monsters } = require('../../models');

//get a monster
router.get(`/:id`, async (req, res) => {
    try {
        const monsterData = await Monsters.findByPk(req.params.id, {
            
        });
        
        if (!monsterData) {
            res.status(404).json({ message: 'no monster found with that id!'});
        }
        res.status(200).json(monsterData);
    } catch (err) {
        res.status(500).json(err);
    }
    //grab monster data and pass to front end in res
})

module.exports = router;