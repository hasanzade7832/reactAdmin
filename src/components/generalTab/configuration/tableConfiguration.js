import React, { useEffect , useState } from "react";
import axios from "axios";
import projectServices from "../../../services/project.services";

const TableConfiguration = () => {
  
  // const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    projectServices
      .getAllCompany()
      .then((res) => {
        console.log("res", dataTable);
        // setDataTable(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <h1>مطالب</h1>
      {/* <ul>
        {dataTable.map((post) => (
          <li key={post.ID}>{post.Name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default TableConfiguration;
