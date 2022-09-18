

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const AddData = () => {
    let history=useHistory();
    let [studentName, setStudentname]=useState("");
    let [courseName, setCoursename]=useState("");
        const handleSubmit=(e)=>{
        e.preventDefault() ;
        let course = {studentName, courseName};
       fetch("http://localhost:5500/datalist",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(course)
        
        }
        ).then(()=>(alert("Data added successfully")))
        history.push("/courselist");
    }
    return ( 
    <div className="sub">
        <h1 id="hh">Add a ToDo list</h1>
        <form onSubmit={handleSubmit} className="form">
        <lable htmlFor="">StudentName : </lable><input type="text" value={studentName} onChange={(e)=>{setStudentname(e.target.value);}} />
            <lable>CourseName :  </lable><input type="text" value={courseName} onChange={(e)=>{setCoursename(e.target.value);}}/>
     <input type="submit"  id="btn2"/>
        </form>
        <Link to ="./courselist">
            <button id="btn3">go To Do List</button>
        </Link>
    </div> );
}
 
export default AddData;