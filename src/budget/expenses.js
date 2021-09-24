import * as R from "ramda";

const {map} = R;

function formatExpense([type, recurrence, label, amount]) {
  const base = {
    label,
    amount,
  };
  switch (type) {
    case "weekly":
      return {
        ...base,
        type: "days",
        recurrence: {unit: "days", mod: 7},
        startDate: recurrence,
      };
    case "monthly":
      return {
        ...base,
        type: "monthly",
        dayOfMonth: recurrence,
      };

    case "yearly":
      return {
        ...base,
        type: "yearly",
        startDate: recurrence,
      };
  }
}

export const fixedExpenses = map(formatExpense, [
  // Rent
  ["monthly", 24, "Rent", 1700],

  // Peter's Development
  ["weekly", "2021-08-09", "Yoga", 50],
]);

export const variableExpenses = map(formatExpense, []);
