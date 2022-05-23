import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/api/favorite/save-job';
export default class Job {

    static async saveJob(query, params) {
        try {
            const { key } = query;
            const { slug } = params;
            const res = await axios.post(`${url}/${slug}`, null, {
                params: {
                    key
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('tkc')}`
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
}