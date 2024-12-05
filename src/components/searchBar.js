import { useState } from "react";
import Results from "./results";
import style from './style.module.css';

export default function SearchBar({items, onItemSelected}){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState('');

    function handleChange(e){
        const value = e.target.value;
        setQuery(value);
    }
    
    function handleResults(items){
        setResults(items);
    }

    return (
        <div className={style.searchBarContainer}>
            {results && <div>{results.length} results</div>}
            <input 
                className={style.styledInput}
                type='text' 
                onChange={handleChange} 
                value={query} 
            />
            <Results 
                items={items} 
                onItemSelected={onItemSelected} 
                query={query} 
                onResultCalculated={handleResults} 
            />
        </div>
    );
}