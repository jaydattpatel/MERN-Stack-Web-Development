import React, { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({
  addExpense,
  expenseToUpdate,
  updateExpense,
  resetExpenseToUpdate,
}) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  useEffect(() => {
    if (!expenseToUpdate) return;
    expenseTextInput.current.value = expenseToUpdate.text;
    expenseAmountInput.current.value = expenseToUpdate.amount;
  }, [expenseToUpdate]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    if (parseInt(expenseAmount) === 0) {
      return;
    }

    if (!expenseToUpdate) {
      const expense = {
        text: expenseText,
        amount: expenseAmount,
      };
      addExpense(expense);
      clearInput();
      return;
    }
    const expense = {
      id: expenseToUpdate.id,
      text: expenseText,
      amount: expenseAmount,
    };

    updateExpense(expense);
    clearInput();
    resetExpenseToUpdate();
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3> {expenseToUpdate ? "Edit " : "Add new "} transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {expenseToUpdate ? "Edit " : "Add "}
        Transaction
      </button>
    </form>
  );
};

export default ExpenseForm;
