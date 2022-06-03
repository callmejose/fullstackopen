import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
    .then(response => response.data)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
    .then(response => {
      console.log('delete response: ', response)
      return response.data
    })
}

const update = (id, object) => {
  return axios.put(`${baseUrl}/${id}`, object)
    .then(response => {
      console.log('put response: ', response)
      return response.data
    })
}

const exportedmethodes = { getAll, create, remove, update }
export default exportedmethodes
