import React, { useState }from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen =({ navigation })=>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        // price === $ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        <View style={{flex: 1}}>
            <SearchBar term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={()=> searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
           
            <ScrollView>
                <ResultsList 
                results={filterResultsByPrice("$")}
                title="Cost Effective"
                navigation={navigation}
                />

                <ResultsList 
                results={filterResultsByPrice("$$")} 
                title="Expensive"
                navigation={navigation}
                />

                <ResultsList results={filterResultsByPrice("$$$")} 
                title="Special Occasion"
                navigation={navigation}
                />

                <ResultsList results={filterResultsByPrice("$$$$")} 
                title="Very Expensive"
                navigation={navigation}
                />

            </ScrollView>
           

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 1
    }


});

export default SearchScreen;