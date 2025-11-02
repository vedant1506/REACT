import React, { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/vedant1506")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-orange-500 text-black text-3xl text-center justify-center items-center">
      Github_Followers: {data.followers || 0}
      <img src={data.avatar_url} width="300" alt="" />
    </div>
  );
}

export default Github;
