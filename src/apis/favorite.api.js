import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/api/favorite';
export default class Job {

    static async createFavoriteJob(query, params) {
        try {
            const { key } = query;
            const { slug } = params;
            const res = await axios.post(`${url}/create-favorite-job/${slug}`, null, {
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

    static async deleteFavoriteJob(query, params) {
        try {
            const { key } = query;
            const { slug } = params;
            const res = await axios.delete(`${url}/delete-favorite-job/${slug}`, {
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

    static async existFavoriteJob(query, params) {
        try {
            const { key } = query;
            const { slug } = params;
            const res = await axios.get(`${url}/check-favorite-job/${slug}`, {
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

    static async getFavoriteJob(query) {
        try {
            const { key } = query;
            const res = await axios.get(`${url}/get-favorite-job`, {
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

    static async createFavoriteCompany(query, params) {
        try {
            const { key } = query;
            const { slug } = params;
            const res = await axios.post(`${url}/create-favorite-company/${slug}`, null, {
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

    static async existFavoriteCompany(query, params) {
        try {
            const { key } = query;
            const { slug } = params;
            const res = await axios.get(`${url}/check-favorite-company/${slug}`, {
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

    static async deleteFavoriteCompany(query, params) {
        try {
            const { key } = query;
            const { slug } = params;
            const res = await axios.delete(`${url}/delete-favorite-company/${slug}`, {
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