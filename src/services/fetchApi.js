const fetchApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const responseJson = await fetch(url);
  if (!responseJson.ok) return console.log('ocorreu um erro com a requisição');
  const response = await responseJson.json();
  return response;
};

export default fetchApi;
