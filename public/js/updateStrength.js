updateStrength(1, 20);

async function updateStrength(id, str) {
  const url = `/api/characters/${id}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ strength: str }),
  });
  console.log(response);
  const json = await response.json();
  console.log(json);
}