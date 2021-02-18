import axios from 'axios'

export const onGetJokeAll = () => {
  return axios.get(`https://api.icndb.com/jokes`);
}

export const onGetCategoriesAll = () => {
  return axios.get(`https://api.icndb.com/categories`);
}

export const onGetJokeLimit = (number) => {
  return axios.get(`https://api.icndb.com/jokes/random/${number}`);
}

export const onGetJoke = (id) => {
  return axios.get(`https://api.icndb.com/jokes/${id}`);
}

export const onChangeNameJoke = (id, firstName, lastName) => {
  return axios.get(`http://api.icndb.com/jokes/${id}?firstName=${firstName}&lastName=${lastName}`);
}