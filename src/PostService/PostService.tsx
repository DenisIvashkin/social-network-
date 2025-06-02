import axios from "axios";

export default class PostService {
    static async getPosts () {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
        return response
    }
}