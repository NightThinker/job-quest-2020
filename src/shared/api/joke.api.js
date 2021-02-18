import axios from 'axios'

export const onGetJoke = () => {
  return axios.get(`https://api.icndb.com/jokes`);
}