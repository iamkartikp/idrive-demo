import { useState, useEffect } from "react";
import axios from "axios";

import { Tag } from "./Tag";

export const Tags = () => {
    const [ tags, setTags ] = useState([]);
    
    useEffect(() => {
        axios.get("https://www.tronalddump.io/tag")
            .then((res) => {
                setTags(res.data._embedded.tag);
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <h1>Tags </h1>
            {tags.map((tag) => {
                return (
                    <Tag key={tag.value} tag={tag} />
                )
            })}
        </>
    )
}