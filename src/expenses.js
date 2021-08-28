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
  ["monthly", 24, "Rent", 1700],
  ["monthly", 3, "Kilo Skin Subscription", 24.95],
]);

export const variableExpenses = map(formatExpense, [
  ["weekly", "2021-08-09", "Yoga", 50],
  ["weekly", "2021-08-02", "Sylvan Therapy", 40],
  ["weekly", "2021-08-02", "Kilo Therapy", 60],
  ["weekly", "2021-08-02", "Kilo Post-Therapy Dinner", 55],
  ["weekly", "2021-08-07", "Che Empanadas", 25],
  ["weekly", "2021-08-07", "Apiary", 100],
  ["monthly", 7, "OnlyFans", 25],
  ["monthly", 10, "Audible", 11.93],
  ["monthly", 10, "GitHub", 4],
  ["monthly", 22, "Stocklabs", 60],
  ["yearly", "2021-08-19", "1Password", 60],
]);
