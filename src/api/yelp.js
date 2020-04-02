import axios from "axios"





export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        authorization: `Bearer ${YELP_API_KEY}`
    }
});

