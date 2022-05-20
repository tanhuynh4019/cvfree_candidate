import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/api/job';
export default class Job {

    static async getJob(query) {
        try {
            const { key, status } = query;
            const res = await axios.get(`${url}`, {
                params: {
                    key,
                    status
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
}