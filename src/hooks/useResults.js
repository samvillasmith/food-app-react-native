import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default () => {
    
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState(''); 

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san antonio"
                }
            });
            setResults(response.data.businesses)
        } catch(err) {
            setErrorMessage("Something went wrong");

        }

    };

    // Call searchAPI upon mount

    // searchApi('pasta')

    useEffect(()=>{
        searchApi("kosher")
    }, []);

    return [searchApi, results, errorMessage];

};