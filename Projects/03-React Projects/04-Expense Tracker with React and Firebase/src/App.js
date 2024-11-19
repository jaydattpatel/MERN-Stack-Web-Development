import { useState, useReducer, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import db from "./firebase-init";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_EXPENSES": {
      return {
        expenses: payload.expenses,
      };
    }
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses],
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      };
    }
    case "UPDATE_EXPENSE": {
      const duplicateExp = state.expenses;
      duplicateExp.forEach((exp) => {
        if (exp.id === payload.expense.id) {
          exp.text = payload.expense.text;
          exp.amount = payload.expense.amount;
        }
      });
      console.log(duplicateExp);
      return {
        expenses: duplicateExp,
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  const getData = async () => {
    const snapshot = await getDocs(collection(db, "expenses"));
    const expenses = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({ type: "GET_EXPENSES", payload: { expenses } });
  };

  useEffect(() => {
    getData();
  }, []);

  const addExpense = async (expense) => {
    const expenseRef = collection(db, "expenses");
    const docRef = await addDoc(expenseRef, expense);

    dispatch({
      type: "ADD_EXPENSE",
      payload: { expense: { id: docRef.id, ...expense } },
    });
  };

  const deleteExpense = async (id) => {
    const docRef = doc(db, "expenses", id);
    await deleteDoc(docRef);

    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    const expenseRef = doc(db, "expenses", expense.id);
    await setDoc(expenseRef, expense);

    dispatch({ type: "UPDATE_EXPENSE", payload: { expense } });
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate}
        />

        <ExpenseInfo expenses={state.expenses} />
        <ExpenseList
          expenses={state.expenses}
          deleteExpense={deleteExpense}
          changeExpenseToUpdate={setExpenseToUpdate}
        />
      </div>
    </>
  );
}

export default App;
