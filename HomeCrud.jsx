import React from "react"
import { Link } from "react-router-dom"
import style from"./homecrud.module.css"
const HomeCrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">Create-Users</Link>
            <Link to="/user"> Users</Link>
        </section>
    )
}

export default HomeCrud