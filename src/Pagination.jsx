import React,{useState, useEffect} from "react"
import "./App.css"
const Pagination =({data,dataPerPage,paginateToPass})=> {
    const totalpages = Math.ceil(data.length/dataPerPage)
    const [navigatePage, setNavigatePage] = useState(1)
    const moveNext = () => {
        if(navigatePage<totalpages){
            setNavigatePage(navigatePage+1)
            console.log(navigatePage)
        }
    }
    useEffect(()=>{
        paginateToPass(navigatePage)
    },[navigatePage])
   
    const movePrevious = () => {
        if(navigatePage>1){
            setNavigatePage(navigatePage-1)
            
        }
    }
    return(
        <div style={{marginTop:"30px"}}>
            <button className="button" onClick = {movePrevious}>Previous</button>
            <button className="button" style={{height:"40px", width:"40px"}}>{navigatePage}</button> 
            <button className="button" onClick={moveNext} >Next</button>        
        </div>
    )
}
export default Pagination