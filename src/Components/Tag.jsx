import { useState } from "react";

import axios from "axios";

export const Tag = ({ tag }) => {
    const [quotes, setQuotes] = useState([]);
    // https://www.tronalddump.io/search/quote?tag=Marco Rubio
    function handleGetQuotes(value) {
        axios.get(`https://www.tronalddump.io/search/quote?tag=${value}`)
            .then((res) => {
                setQuotes(res.data._embedded.quotes);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                document.getElementById(`${value}`).nextSibling.hidden = !document.getElementById(`${value}`).nextSibling.hidden;
            })
    }
    return (
        <>
            <button id={tag.value} onClick={() => handleGetQuotes(tag.value)}>{tag.value}</button>

            <div>
                {quotes.map((quote, idx) => {
                    return (
                        <p key={quote.quote_id}>{idx + 1}. {quote.value}</p>
                    )
                })}
            </div>
        </>
    )
}