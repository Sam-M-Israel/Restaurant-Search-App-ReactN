import { useState, useEffect} from "react";
import yelp from "../api/yelp";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        var index = searchTerm.search(',');
        console.log(searchTerm)
        var dish =''
        var city =''
        if(index === -1) {
            dish = searchTerm;
            city = "NYC";
        } else {
            dish = searchTerm.substr(0,index);
            city = searchTerm.substr(index+1);
        }
        
        
        try {
            const response = await yelp.get('/search', {
                params: {
                limit: 50,
                term: searchTerm,
                location: city
                }
            })
            setResults(response.data.businesses); 
        } catch (err){
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};