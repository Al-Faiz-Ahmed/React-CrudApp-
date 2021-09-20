import React, { useState } from "react";
import "./form.css";
import TableData from "./listData";

function Form() {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  function getData() {
    let initialName = name;
    let initialRollNumber = rollNumber;
    if (initialName !== "" && initialRollNumber !== "") {
      let jsonData = {
        name: initialName,
        rollNumber: initialRollNumber,
      };

      let initialStudentsData = [...studentsData, jsonData];
      setStudentsData(initialStudentsData);
      setName("");
      setRollNumber("");
    }
  }

  return (
    <div>
      <div className="formDiv">
        <div className="textfiledDiv">
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="textfiledDiv">
          <input
            type="text"
            placeholder="Roll No"
            onChange={(event) => setRollNumber(event.target.value)}
            value={rollNumber}
          />
        </div>
        <div className="buttonDiv">
          <button onClick={getData}>Submit</button>
        </div>
      </div>

      {
        studentsData.length !== 0 ? <TableData studentsList={studentsData} />
        : null
      }

    </div>
  );
}

export default Form;
