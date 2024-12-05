import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./markedItem";
import style from './style.module.css';

export default function Results({items, onItemSelected, query, onResultCalculated}){
    const [results, setResults] = useState([]);
    const filteredItems = useMemo(() => {
        return findMatch(items, query)
    }, [items, query]);
    //El segundo parámetro se usa para colcoar los valores/variables que son dependencias de useMemo
    //para que cuando cambie elestado de alguna se vuelva a ejecutar la función y guarde el valor.

    /*Para efectuar de manera correcta esta función tenemos que utilizar useMemo
    para que nos permita guardar el valor, el resultado de esa funcion y 
    solo se ejecutará cuando exista un cierto cambio*/

    useEffect(() => {
        onResultCalculated(results);
    }, [results])

    function findMatch(items, query){ 
        const res = items.filter(i => {
            return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
        });

        setResults(res);
        return res;
    }
    


    return (
        <div className={style.resultsContainer}>
            {
                query !== '' 
                ? 
                    filteredItems.map((item) => (
                        <MarkedItem 
                            key={item.id} 
                            item={item} 
                            query={query}
                            onClick={onItemSelected} /> 
                    ))
                : 
                    ""
            }
        </div>
    );
}