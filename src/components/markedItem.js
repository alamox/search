import { useMemo } from "react";
import style from './style.module.css';

export default function MarkedItem({item, query, onClick}){


    const {left, center, right} = useMemo(() => getPositions(item, query), [item, query]);

    function getPositions(item, query){
        const index = item.title.toLowerCase().indexOf(query);
        const left = item.title.slice(0, index);
        const right = item.title.slice(index + query.length);
        const center = item.title.slice(index, index+query.length);

        return {left, center, right};
    }

    function handleClick(){
        onClick(item);
    }

    return (
        <button className={style.styledItem} onClick={handleClick}>
            {left} 
            <span className={style.styleMarker}>{center}</span>
            {right}
        </button>
    );
}