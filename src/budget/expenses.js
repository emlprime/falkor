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
  ["monthly", 10, "Audible", 11.93],
  ["monthly", 1, "Kristen", 400],
  ["monthly", 1, "KCLU", 15],
  ["weekly", "2021-08-01", "Jill Therapy", 170],

  // Groceries
  ["weekly", "2021-08-01", "Quokka", 100],

  // Investment
  ["monthly", 22, "Stocklabs", 60],

  // Home
  ["monthly", 25, "Hot Tub Cleaning", 60],

  // Internet
  ["monthly", 10, "GitHub", 4],
  ["monthly", "2021-08-19", "1Password", 5],
  ["monthly", "2021-08-19", "Netflix", 14],

  // Kids
  ["monthly", 3, "Kilo Skin Subscription", 24.95],
  ["weekly", "2021-08-02", "Sylvan Therapy", 40],
  ["weekly", "2021-08-02", "Kilo Therapy", 60],
  ["weekly", "2021-08-02", "Kilo Post-Therapy Dinner", 55],

  ["weekly", "2021-08-02", "Kilo Shopping", 100],
]);

export const variableExpenses = map(formatExpense, [
  // Entertainment
  ["weekly", "2021-08-28", "Games", 10],
  ["weekly", "2021-08-28", "Movies", 20],

  // Food and Beverage
  ["monthly", 28, "Kombucha", 200],

  // Groceries
  ["weekly", "2021-08-28", "Groceries", 100],

  // Peter's Entertainment
  ["weekly", "2021-08-01", "OnlyFans", 25],

  // Kids
  ["monthly", 1, "Amazon", 600],
  ["monthly", 1, "CVS", 70],
  ["monthly", 1, "7-Eleven", 20],

  // Elaina
  ["weekly", "2021-08-07", "Restaurant", 55],
  ["weekly", "2021-08-07", "Apiary", 50],
  // ["weekly", "2021-08-07", "Peter & Elaina Therapy", 230],

  // Transport Fuel
  ["monthly", "2021-08-28", "Fuel", 100],
]);
