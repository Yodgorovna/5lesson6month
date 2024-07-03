import React from "react";

export const Contact = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setData(users);
      });
  }, []);
  return (
    <div>
      {data.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
};
