import axios from "axios"
import {useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from"./homecrud.module.css"


const EditUsers=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let{index}=useParams()
    let navigate = useNavigate()
    console.log(index)

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((x)=>{
            console.log(x.data)
            setName(x.data.name)
            setSalary(x.data.salary)
            setCompany(x.data.company)
        })
    },[])

    let nameData=(e)=>{
        setName(e.target.value)
    }

    let salaryData=(e)=>{
        setSalary(e.target.value)
    }

    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    

    let formHandle=(e)=>{
        e.preventDefault()
        
    let payLoad={name,salary,company}
        axios.put(`http://localhost:3000/users/${index}`,payLoad)
        .then(()=>{
            console.log("data has been added")

        })
        navigate("/user")
    }
    return(
        <div id={style.editForm}>
            <form>
                <h3>Edit data</h3>
                <label>Name:</label>
                <input type="text" value={name}onChange={nameData} /><br />
                <label>Salary:</label>
                <input type="text" value={salary}onChange={salaryData}/><br /> 
                <label>Company</label>
                <input type="text" value={company}onChange={companyData} /><br /> 
                <button  onClick={formHandle}>Submit</button>
            
            </form>
        </div>
    )
}
export default EditUsers 