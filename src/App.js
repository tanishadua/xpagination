import React, {useState,useEffect} from "react"
import Pagination from "./Pagination";
import './App.css';
import Table from "./table"
function App() {
  //define the state for the table data
  const [tableData, setTableData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState(10)
  const fetchData = async () => {
    try{
      const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
      const json = await response.json();
      setTableData(json)
      //console.log(json)
    }catch(error){
      console.error("Error fetching data:", error);
      alert("failed to fetch data")
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  //Get current table data
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const indexOfLastData = currentPage*dataPerPage
  const indexOfFirstData = indexOfLastData-dataPerPage
  const currentData = tableData.slice(indexOfFirstData,indexOfLastData)
  return (
    <div className="App">
      <h1>Employee Data Table</h1>
      <Table data={currentData}/>
      <Pagination data={tableData} dataPerPage={dataPerPage} paginateToPass={paginate}/>
    </div>
  );
}

export default App;
