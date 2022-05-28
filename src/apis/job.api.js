import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/api/job';
export default class Job {

    static async getJob(query) {
        try {
            const { key, status, limit } = query;
            const res = await axios.get(`${url}`, {
                params: {
                    key,
                    status,
                    limit
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async getByIdJob(query, slug) {
        try {
            const { key } = query;
            const res = await axios.get(`${url}/${slug}`, {
                params: {
                    key
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
}