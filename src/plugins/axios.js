import axios from 'axios'

axios.defaults.baseURL = 'https://diabetes20.herokuapp.com'
axios.defaults.headers.common['token'] = window.localStorage.getItem('token')

export default axios
