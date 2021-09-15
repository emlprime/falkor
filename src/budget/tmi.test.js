import {
  add,
  always,
  allPass,
  assocPath,
  cond,
  concat,
  last,
  length,
  lte,
  multiply,
  omit,
  pathOr,
  pipe,
  prop,
  propOr,
  reduce,
  subtract,
  sum,
  T,
  values,
} from "ramda";
import {fixedExpenses, variableExpenses} from "./expenses";
import {deriveCategory} from "./utils";

const hasDaysRecurrenceUnit = pathOr(false, ["recurrence", "unit"]);
const has7RecurrenceMod = pathOr(false, ["recurrence", "mod"]);

const isWeekly = allPass([hasDaysRecurrenceUnit, has7RecurrenceMod]);

const deriveMultiplier = cond([[isWeekly, always(4)], [T, always(1)]]);

const categoryReducer = (acc, item) => {
  const category = deriveCategory(item);
  const categorySumPath = ["result", category];
  const oldValue = pathOr(0, categorySumPath, acc);
  const newValue = propOr(0, "amount", item);
  const multiplier = deriveMultiplier(item);
  const value = add(oldValue, multiply(newValue, multiplier));
  return assocPath(categorySumPath, value, acc);
};

const monthlyTakehomeIncome = 7847;
const monthlyExpense = pipe(
  values,
  sum,
);

const withoutKids = omit(["Kids/Sylvan", "Kids/Kilo"]);
const withoutDevelopment = omit(["Personal Development"]);

describe("Budget", () => {
  test("With expenses", () => {
    const result = prop(
      "result",
      reduce(
        categoryReducer,
        {result: {}},
        concat(fixedExpenses, variableExpenses),
      ),
    );
    console.log(`Categorized Monthly Spending:`, result);
    const totalSpend = monthlyExpense(result);
    console.log(`totalSpend:`, totalSpend);
    const monthlySurplus = subtract(monthlyTakehomeIncome, totalSpend);
    console.log(`monthlySurplus current:`, monthlySurplus);

    const spendWOKids = withoutKids(result);
    const totalSpendWOKids = monthlyExpense(spendWOKids);
    console.log(`totalSpend W/O Kids:`, totalSpendWOKids);
    const monthlySurplusWOKids = subtract(
      monthlyTakehomeIncome,
      totalSpendWOKids,
    );
    console.log(`monthlySurplus W/O Kids:`, monthlySurplusWOKids);

    const spendActualized = withoutDevelopment(spendWOKids);
    const totalSpendActualized = monthlyExpense(spendActualized);
    console.log(`totalSpend Actualized:`, totalSpendActualized);
    const monthlySurplusActualized = subtract(
      monthlyTakehomeIncome,
      totalSpendActualized,
    );
    console.log(`monthlySurplus actualized:`, monthlySurplusActualized);

    expect(true).toBeTruthy();
  });
});
