//NOT WORKING YET
//STILL FIGURING OUT 
//SUCH AN L
//CANT BELIEVE I CANT FIGURE THIS OUT??
//NEED TO PASS IN THE NEW STRENGTH STAT AND SEND IT BACK TO THE CHARACTER MODEL
async function updateStrength(id, str)  {

    const response = await fetch(`/api/characters/${id}`, {
        method: 'PUT',
        body:JSON.stringify({
            id,
            name,
            strength,
            health,
            user_id,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace(`/character/${id}`)
        //NOT SURE IF IT NEEDS TO BE LIKE THIS, LOOKING AT 
        //10-STU_HANDLEBARS IN 14-MVC 
        //PUBLIC/JS/EDIT-DISH.JS
    } else {
        alert('fail to update str');
    }
}

//seeded characters to test in insomnia 
//testing function
//latest error is "fetch not defined"
updateStrength(1, 20);