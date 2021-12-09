import { React, useEffect, useState } from 'react'

export default function Content() {
    const tabs = ["posts","albums", "todos", "photos"]
    //Sua tittle
    const [tittle, setTittle] = useState('')
    const [arr, setArr] = useState([])
    const [type, setType] = useState("posts")
    useEffect(() => {
        document.title = tittle
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(data => setArr(data));
            
    }, [type])

    return (
        <div>
            <input type='text'
                className='form-control' style={{ width: 300}} value={tittle} onChange={(e) => setTittle(e.target.value)} placeholder='Nhập tittle' />
                 {tabs.map((tab)=>
                    <button type='button' style = {type === tab ? {color:'#fff', backgroundColor: '#333333'}: {}} className='btn ' key = {tab} onClick = {()=> setType(tab)}>{tab}</button>)}
            
            
            <ul>
            <ul>
            {arr.map((elm)=>
               <li key = {elm.id}>{elm.title}</li>)}
            </ul>
            </ul>
        </div>
    )
}
