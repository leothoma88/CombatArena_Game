const router = require('express').Router();
const { User, Characters } = require('../../models');

//get the character & data
router.get('/getCharacter/:user_id', (req, res) => {
    Characters.findOne({
        where: {
            user_id: req.params.user_id
        }
         
    })
    //grab character data and pass to front end in res
})

router.post('/updateCharacter/:user_id', (req, res) => {
    //todo: get user from session using passport/express whatever, 
    //after u have user,grab id of user and use that to update the character
    
    const [updatedRows] = await
    Characters.update(
        {
            
        },
        {
            where: { x: null}
        }
    )
})

module.exports = router;