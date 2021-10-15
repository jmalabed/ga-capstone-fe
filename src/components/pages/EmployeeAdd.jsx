import { useState, useEffect } from "react";

const EmployeeAdd = (props) => {
  const initialInput = {
    name: "",
    email: "",
    isEmployee: true,
    isInfected: false,
    business: props.match.params.id,
    phone: "",
  };
  const [input, setInput] = useState(initialInput);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const addPerson = async (input) => {
    try {
      const configs = {
        body: JSON.stringify(input),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newPerson = await fetch(
        "https://office-culture.herokuapp.com/person",
        configs
      );
      const parsedPerson = await newPerson.json();
      console.log(parsedPerson);
    } catch (err) {
      console.log(err);
    } finally {
      setInput(initialInput);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(input);
    alert("Person Added");
  };

  useEffect(() => {
    // console.log("change");
  }, []);

  return (
    <>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={input.name}
        ></input>
        <br />
        <label htmlFor="phone">Phone: </label>
        <br />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={input.phone}
        ></input>
        <br />
        <label htmlFor="email">Email: </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={input.email}
        ></input>
        <br />
        <input type="submit" value="Add"></input>
      </form>
      <a href={`/business/${props.match.params.id}`}>Return to business</a>
    </>
  );
};
export default EmployeeAdd;
