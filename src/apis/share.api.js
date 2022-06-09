import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/api/share';
export default class Share {
    static async shareJob(query, params) {
        try {
            const { key, status } = query;
            const { slug } = params;
            const res = await axios.post(`${url}/${slug}`, null, {
                params: {
                    key,
                    status
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

    static async shareJobNoUser(query, params) {
        try {
            const { key, status } = query;
            const { slug } = params;
            const res = await axios.post(`${url}/Nouser/${slug}`, null, {
                params: {
                    key,
                    status
                },
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async shareConnect(query, params) {
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