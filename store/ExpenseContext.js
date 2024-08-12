import { createContext, useState } from "react";
import { dummyData } from "../components/ExpensesOutput";

export const ExpenseContext = createContext({
  AddEx: (id, name, amount, date) => {},
  DeleteEx: (id) => {},
  UpdateEx: (id, name, amount, date) => {},
});

const ExpenseContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(dummyData);

  const AddExpense = (id, name, amount, date) => {
    setExpenses((currentExpenses) => [
      ...currentExpenses,
      { id, name, amount, date },
    ]);
  };

  const DeleteExpense = (id) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((item) => item.id !== id)
    );
  };

  const UpdateExpense = (id, name, amount, date) => {
    setExpenses((currentExpenses) =>
      currentExpenses.map((item) =>
        item.id === id ? { id, name, amount, date } : item
      )
    );
  };

  const value = {
    AddEx: AddExpense,
    DeleteEx: DeleteExpense,
    UpdateEx: UpdateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
