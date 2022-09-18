import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const Courselist=()=> {
    let history =useHistory();
    let{data : course}=useFetch(`http://localhost:5500/datalist`)
    let handleDelete=(id)=>{
        fetch(`http://localhost:5500/datalist/${id}`,{method: "DELETE"})
        .then(()=>(alert(" deleted successfully")))
        history.push("/AddData");
    };
    return ( 
        <div className="course-list">
            <h1 id="hhh">List all data</h1>
         
                            { course && course.map((courses)=>(
                              
                                    <div className="div1">
                                    <h1>Student-Name: {courses.studentName}</h1><br/>
                                    <h1>Course-Name: {courses.courseName}</h1>
                                
                                    <button onClick={()=>{handleDelete(courses.id)}} id="btn4">DELETE</button>
                                   </div>
                             
                            ))}
            
        </div>
     );
}
export default Courselist;