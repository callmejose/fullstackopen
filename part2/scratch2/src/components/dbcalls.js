import axios from "axios"
// const baseUrl = 'http://localhost:3001/api/notes'
const baseUrl = '/api/notes'

const getAll = () => {
    const request = fetch(baseUrl)
        .then(response => response.json())
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    }
    return request.then(response => response.concat(nonExisting))
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
        .then(response => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
        .then(response => response.data)
}

export default { getAll, create, update }