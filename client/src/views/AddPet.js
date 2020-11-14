import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { Link, navigate } from "@reach/router";

export default (props) => {
  const [errorMessage, setErrorMessage] = useState([]);

  const createPet = ({
    name,
    type,
    description,
    firstSkill,
    secSkill,
    thirdSkill,
  }) => {
    axios
      .post("http://localhost:8000/api/pets/new", {
        name,
        type,
        description,
        firstSkill,
        secSkill,
        thirdSkill,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        const errRes = err.response.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].message);
        }
        setErrorMessage(errArr);
      });
  };
  const displayValidator = errorMessage.map((error, i) => {
    return (
      <p className="alert alert-warning alert-dismissible fade show" key={i}>
        {error}
      </p>
    );
  });

  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      <h2>
        Know a pet needing a home ?{" "}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-person-plus-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </h2>
      <Link to="/">Back to home </Link>
      {displayValidator}

      <Form
        initialName=""
        initialType=""
        initialDescription=""
        initialFirstSkill=""
        initialSecSkill=""
        initialThirdSkill=""
        buttonValue="Add A Pet"
        onSuccess={createPet}
      />
    </div>
  );
};
