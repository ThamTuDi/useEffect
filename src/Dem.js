import React from 'react'
import { useState, useEffect } from 'react'


export default function Dem() {
    const [countdown, setCountdown] = useState(420)

    useEffect(()=>{
       const time = setInterval(()=>{
            setCountdown(prevState => prevState-1)
        },1000)
        return () =>clearInterval(time)
    },[])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}
