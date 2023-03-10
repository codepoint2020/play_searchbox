
import { React, useState } from "react";


const App = () => {

  const [myData, setMyData] = useState([
    {
      firstname: "Lincoln",
      lastname: "Herrera",
      city: "NYC"
    },

    {
      firstname: "Ruby",
      lastname: "Beltran",
      city: "California"
    },

    {
      firstname: "Garret",
      lastname: "Ewing",
      city: "Texas"
    },

    {
      firstname: "Sheila",
      lastname: "Montes",
      city: "Delaware"
    }

  ]);

  const [searchTerm, setSearchTerm] = useState('');

  //function onchange

  const inputChange = (event) => {
    setSearchTerm(event.target.value);
 
  }

  const filteredData = myData.filter((criteria) => {
    return criteria.firstname.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <>
    <div className="container">
      <h1 className="h2 text-center bg-info my-4 p-4">Search App Drill 1</h1>
      <div className="row my-4">
        <div className="col-md-4 my-4">
          <input className="form-control" placeholder="Search" value={searchTerm} onChange={inputChange}/>
        </div>
      </div>
        
        <div className="row">
          <table className="table">
            <thead className="table-info"> 
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>City</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, i) => (
                <tr>
                <td>{i + 1}</td>
                <td>{data.firstname + " " + data.lastname}</td>
                <td>{data.city}</td>
                <td>
                  <a href="#" className="btn btn-sm btn-info">Click</a>
                </td>
              </tr>
              ))}
                
            </tbody>
          </table>
        </div>
        
    </div>
    </>
  );
}

export default App;
