import React, { useState, useEffect } from "react";
import "./tablr.css";

function TableData({ studentsList }) {
  let [currentStudentsList, updatesStudentList] = useState(studentsList);

  useEffect(() => {
    updatesStudentList(studentsList);
  }, [studentsList]);

//   let deletItems;

  function deleteItem(e) {
    //   let eindex =  e.target.getAttribute('index')
    // let deletItems = currentStudentsList
    // deletItems.splice(eindex, 1);
    // let upadted = deletItems
    // updatesStudentList(upadted);
    let elemIndex = e.target.getAttribute('index')
    
    updatesStudentList(
        studentsList.filter((el,index) => elemIndex != index)
    )
    

    // useEffect(() => {
    //     updatesStudentList(studentsList);
    //   }, [studentsList]);
  }

  return (
    <div>
      <div className="tableDiv">
        <table>
          <thead>
            <tr>
              <th className="sr__no">Sr No</th>
              <th className="name">Name</th>
              <th className="roll">Roll No</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {currentStudentsList.map((data, index) => (
              <tr key={index}>
                <td className="sr__no">{index + 1}</td>
                <td className="name">{data.name}</td>
                <td className="roll">{data.rollNumber}</td>
                <td className="actionDiv">
                  <button index={index}>Edit</button>
                  <button index={index} onClick={deleteItem}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {/* <tr>
              <td className="sr__no">1</td>
              <td className="name">Muhmmad Faiz Ahmed</td>
              <td className="roll">21346</td>
              <td className="actionDiv">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td className="sr__no">2</td>
              <td className="name">Muzair</td>
              <td className="roll">54648</td>
              <td className="actionDiv">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TableData;
