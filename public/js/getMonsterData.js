const getMonster = (id) => {
  fetch(`/getMonsters/:${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      return response.JSON();
    })
    .catch((error) => console.log(error));
};
export default getMonster;