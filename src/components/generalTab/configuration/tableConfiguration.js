import React, { useState } from "react";
import axios from "axios";

const TableConfiguration = () => {
  // const [data, setData] = useState([]);

  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => {
  //     setData(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });

  return (
    <div>
      <h1>مطالب API</h1>
      {/* <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default TableConfiguration;
