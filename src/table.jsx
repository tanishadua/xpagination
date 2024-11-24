import "./App.css"
function Table({ data }) {
  const DisplayData = data.map((item) => {
    return (
      <tr style={{borderBottom:"1px solid #d8d8d8", textAlign:"left"}}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.role}</td>
      </tr>
    );
  });
  return (
    <div className="App" style={{width:"1000px", height:"500px"}}>
      <table className="table">
        <thead style={{borderBottom:"1px solid #d8d8d8", textAlign:"left"}}>
          <tr style={{height:"50px"}}>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody >{DisplayData}</tbody>
      </table>
    </div>
  );
}
export default Table;
