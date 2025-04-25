// //je compontent jema retun kare kam kare tena te file banavani  hookma js no use kari to js file banavvi

// import {useEffect,useState} from 'react';


// export default function useCurrencyInfo(currency){
//     // const [data,setData]=useState()
//   let data;
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res)=>{
//             res.json()
//         }).then((res)=>data= res[currency])
//         console.log(data);

//     },[currency])
//     return data
// }

// src/components/useCurrencyInfo.js
import { useEffect, useState } from 'react';

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
            })
            .catch((err) => {
                console.error("Failed to fetch currency data:", err);
                setData();
            });
    }, [currency]);
    return data;
}
