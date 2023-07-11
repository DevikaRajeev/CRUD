import React from "react"
// import { Form } from "react-router-dom"
import HomeCrud from "./Components/HomeCrud"
 import { BrowserRouter,Routes,Route } from "react-router-dom"
 import CreatUsers from "./Components/CreateUsers"
 import Users from "./Components/Users"
 import EditUsers from "./Components/EditUsers"

const App=()=>{
    return(
        <div>
           <BrowserRouter>
           <HomeCrud/>
           <Routes>
            <Route path="/" element={<CreatUsers/>}/>
             <Route path="/user" element={<Users/>}/>
             <Route path="/e/:index" element={<EditUsers/>}/>
           </Routes>
           </BrowserRouter> 
        </div>
    )
}

export default App