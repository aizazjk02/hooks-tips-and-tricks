import { useState } from "react";

const UpdateObject = () => {
  const [obj, setObj] = useState({
    name: "",
    age: "24",
  });
  console.log(obj);
  const handleChange = (e) => {
    setObj({
        ...obj,
        name: e.target.value
    })

    //  another way
    setObj(prev => ({
        ...prev,
        name: e.target.value,
    }))

    // another way
    setObj(prev => {
        return {
            ...prev,
            name: e.target.value, 
        }
    })
  }
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input type="text" name="" id="name" onChange={handleChange}/>
    </div>
  );
};

export default UpdateObject;
