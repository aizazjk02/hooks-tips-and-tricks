import { useState } from "react";

const UseStateInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //*consider if you want to get a full name for this component then you dont have to make another state for a fullName unless you want your component to re-render.
  const fullName = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  const handleChange = (e) => {
    if (e.target.id === "firstName") setFirstName(e.target.value);
    else setLastName(e.target.value);
  };
  return (
    <div>
      <label htmlFor="firstName">firstName: </label>
      <input type="text" name="" id="firstName" onChange={handleChange} />
      <label htmlFor="lastName">lastName: </label>
      <input type="text" name="" id="lastName" onChange={handleChange} />
      <p>lastName: {fullName}</p>
    </div>
  );
};

export default UseStateInfo;
