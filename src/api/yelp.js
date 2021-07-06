import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer v_fm_krYE5U_Q3imltj_4WO-KgpplWaqy2dOfYkWRAWiFY3MTvTnrAf2AHP-UdxsrLXbMRPhlIIhDLSuvP_w3EvX9W9VbBqRlYVIL_EWKqhVEBzftlVFhCozBdjbYHYx"
        
    }
});

