import axios from 'axios'

export const FETCH_LIST = 'FETCH_LIST'
export const FETCH_CANDIDATE = 'FETCH_CANDIDATE'
export const UPDATE_CANDIDATE = 'UPDATE_CANDIDATE'
export const ADD_CANDIDATE = 'ADD_CANDIDATE'
export const DELETE_CANDIDATE = 'DELETE_CANDIDATE'
export const CLEAR_CANDIDATE = 'CLEAR_CANDIDATE'

export function fetchList() {
  const url = `/data/candidates`
  const request = axios.get(url)

  return {
    type: FETCH_LIST,
    payload: request
  }
}

export function fetchCandidate(id) {
  const url = `/data/candidate/${id}`
  const request = axios.get(url)

  return {
    type: FETCH_CANDIDATE,
    payload: request
  }
}

export function updateCandidate(id, props) {
  debugger
  const url = `/data/candidate/${id}`
  const request = axios.put(url, props)

  return {
    type: UPDATE_CANDIDATE,
    payload: request
  }
}

export function addCandidate(props) {
  debugger
  const url = `/data/candidate/`
  const request = axios.post(url, props)

  return {
    type: FETCH_CANDIDATE,
    payload: request
  }
}

export function deleteCandidate(id) {
  const url = `/data/candidate/${id}`
  const request = axios.delete(url)

  return {
    type: DELETE_CANDIDATE,
    payload: request
  }
}

export function clearCandidateData() {
  return {
    type: CLEAR_CANDIDATE
  }
}
