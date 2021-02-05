import axios from 'axios'

export const Api = {
  getRandom () {
    return axios.get("https://api.unsplash.com/photos/random?&client_id=PyAqIebEqdsDtQvTUo7D5zuHaugJp39c1bfQgPtLGJc&count=12")
  },
  getImages (search) {
    return axios.get('https://api.unsplash.com/search/photos?page=1&query='+ search + '&client_id=PyAqIebEqdsDtQvTUo7D5zuHaugJp39c1bfQgPtLGJc&per_page=12')
  },
  getTopics () {
    return axios.get('https://api.unsplash.com/topics?page=1&client_id=PyAqIebEqdsDtQvTUo7D5zuHaugJp39c1bfQgPtLGJc&per_page=20')
  }
}
