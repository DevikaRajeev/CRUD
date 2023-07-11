import axios from "axios"
import  React,{ useEffect,useState } from "react"
import design from"./homecrud.module.css"
import { Link } from "react-router-dom"
import style from"./homecrud.module.css"


const Users=()=>{
    let[content,setContent]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>{
            setContent(response.data)
        })
            
        
    },[])

    let deleteData=(a)=>{
        axios.delete(`http://localhost:3000/users/${a}`)
        window.location.assign("/user")
    }
    console.log(content)
    return(
        <section id={design.profile}>
            {content.map((x)=>{
                return(
                    <div id={design.cards}>
                        <h1>Id:{x.id}</h1> <br />
                        <h1>Name:{x.name}</h1> <br />
                        <h1>Company:{x.company}</h1> <br />
                        <h1>Salary:{x.salary}</h1> <br />
                        <button id={style.btn}><Link to={`/e/${x.id}`}>Edit</Link></button> <br />
                        <button id={style.btn}  onClick={()=>{deleteData(x.id)}}>Delete</button>

                    </div>
                )
            })}
        </section>
    )
    
}
export default Users

