import React from "react";
import "./Form.css";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_MUTATION = gql`
  mutation (
    $title: String!
    $description: String!
    $price: Float!
    $date: String!
  ) {
    createEvent(
      eventInput: {
        title: $title
        description: $description
        price: $price
        date: $date
      }
    ) {
      title
      description
    }
  }
`;

function Form() {
  const [enteredTitle, setTitle] = useState("");
  const [enteredDescription, setDescription] = useState("");
  const [enteredPrice, setPrice] = useState("");
  const [enteredDate, setDate] = useState("");
  const [createEvent] = useMutation(CREATE_MUTATION);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceChangehandler = (event) => {
    setPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: enteredTitle,
      description: enteredDescription,
      price: +enteredPrice,
      date: enteredDate,
    };

    createEvent({
      variables: {
        title: enteredTitle,
        description: enteredDescription,
        price: +enteredPrice,
        date: enteredDate,
      },
    })
    
    console.log(formData);
    ;

    setTitle("");
    setDescription("");
    setPrice("");
    setDate("");
  };

  return (
    <div className="main_container">
      <h3>Admin Event Form</h3>
      <form onSubmit={formSubmitHandler}>
        <label id="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter the title"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
        <label id="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Enter the Description"
          onChange={descriptionChangeHandler}
          value={enteredDescription}
        />
        <label id="price">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter the price"
          onChange={priceChangehandler}
          value={enteredPrice}
        />
        <label id="date">Date</label>
        <input
          type="text"
          name="date"
          placeholder="Enter the date"
          onChange={dateChangeHandler}
          value={enteredDate}
        ></input>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default Form;
