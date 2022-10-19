const getCharacter = (id) =>  {
    fetch(`/getCharacter/:${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(function(response){
        return response.JSON();
    }).catch(error => console.log(error));
}
export default getCharacter;