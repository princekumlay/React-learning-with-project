import React, { useState, useTransition } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    address: "",
    gender: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // console.log("FirstName: " - name.firstName);
    // window.alert("FirstName: " - name.firstName);
  }

  return (
    <div id="formContainer">

      <form id="form" onSubmit={handleSubmit}>
        <h2>Form</h2>
        <div>
        <label>FirstName: </label>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
          placeholder="Kailash"
        />
        </div>

        <div>
        <label> LastName: </label>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
          placeholder="Kumlay"
        />
        </div>

        <div>
        <label>Address: </label>
        <textarea
          onChange={(e) => setName({ ...name, address: e.target.value })}
          type="address"
          value={name.address}
          placeholder="Gali NO. 8, Jataula Damaodarpur"
        />
        </div>

        <div>
        <label>Email: </label>
        <input
          onChange={(e) => setName({ ...name, email: e.target.value })}
          type="text"
          value={name.email}
          placeholder="Kailash"
        />
        </div>

        <div>
        <label> Gender: </label>
        <select
          onChange={(e) => setName({ ...name, gender: e.target.value })}
          value={name.gender}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        </div>

        <button id="formSubmitButton" type="submit">
          Submit
        </button>

      </form>

      {/* Show details after submit */}
      {submitted && (
        <div>
          <h2>User Details</h2>

          <p>
            <strong>FirstName:</strong> {name.firstName}
          </p>

          <p>
            <strong>LastName:</strong> {name.lastName}
          </p>

          <p>
            <strong>Address:</strong> {name.address}
          </p>

          <p>
            <strong>Gender:</strong> {name.gender}
          </p>
        </div>
      )}
    </div>
  );
}

export default Form;
