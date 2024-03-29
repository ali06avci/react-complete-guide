import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*  const [userInput, setuserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const titleChangeHandler = (e) => setEnteredTitle(e.target.value);

  //setuserInput({ ...userInput, enteredTitle: event.target.valu e });

  /*  setuserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); // this is the safer way to ensure that you always operate on the latest state snapshot.//*/

  const amountChangeHandler = (e) => setEnteredAmount(e.target.value);

  /* setuserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */

  /*  setuserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    }); */

  const dateChangeHandler = (e) => setEnteredDate(e.target.value);

  /* setuserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */

  /* setuserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    }); */

  /* //alternative approach : Creating A Shared Handler Function
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  }; */

  const submitHandler = (e) => {
    e.preventDefault(); //prevent browser default action

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    //clear the form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            /*  two way binding */
            //value={enteredTitle}
            onChange={titleChangeHandler}

            /* //alternative approach : Creating A Shared Handler Function
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }*/
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}

            /*//alternative approach : Creating A Shared Handler Function
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }*/
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}

            /*//alternative approach : Creating A Shared Handler Function
            onChange={(event) =>
              inputChangeHandler("date", event.target.value)
            }*/
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
