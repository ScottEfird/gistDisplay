import axios from 'axios'

export const FETCH_GISTS = 'FETCH_GISTS'
export const FETCH_GIST = 'FETCH_GIST'

//'https://api.github.com/gists/public?page=3'
const ROOT_URL = 'https://api.github.com/gists'

//Redux promise unwraps the promise from the request
export function fetchGists() {
  const request = axios.get(`${ROOT_URL}/public`)
  return {
    type: FETCH_GISTS,
    payload: request
  } 
}

export function fetchGist(id) {
  const request = axios.get(`${ROOT_URL}/${id}`)
  return {
    type: FETCH_GIST,
    payload: request
  } 
}
