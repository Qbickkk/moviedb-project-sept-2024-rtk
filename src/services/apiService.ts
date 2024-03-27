import axios from "axios";

import {baseURL} from "../constants";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(request => {
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdmOTIyZmQ1ZmIxNGEwMTRiZTgzMGY4MjU1OTE2ZCIsInN1YiI6IjY0ZTRmNGQxNTI1OGFlMDBhZGQyZmVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yOA7hOnSh1Ge-Pye5oCdMMqBlGI_xeCghQhldmKAJ44';
    return request;
});

export {
    apiService
}