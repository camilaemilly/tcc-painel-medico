import axios from 'axios'

axios.defaults.baseURL = 'http://api.minderapplication.com/api'
axios.defaults.headers.common['token'] = '' // window.localStorage.getItem('token')

export default axios
