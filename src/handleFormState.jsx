import { useState } from "react";

const FormStateDemo = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(form);
  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <form action="">
      <h3>Form: </h3>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default FormStateDemo;
