import axios from 'axios';

const ROOT_URL = 'http://localhost:3333/api';

// Curried api caller for ease of use in the future :)
export default function (basePath) {
  return function (method) {
    return function (path) {
      return axios[method](`${ROOT_URL}/${basePath}${path}`);
    };
  };
};
