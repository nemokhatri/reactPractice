// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currencies}.json")
//         .then((res) => res.json)
//         .then((res) => setData(res[currency]))
//         console.log(data)
//     }, [currency] )
//     console.log(data)
//     return data
// }


// export default useCurrencyInfo

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                console.log(res[currency]);
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
