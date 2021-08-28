import dayjs from "dayjs";
import * as R from "ramda";
import {colors} from "../constants";
import {fixedExpenses, variableExpenses} from "./expenses";

const {add, equals, curry, reduce, append, last, range, prop} = R;

const dates = reduce(
  dates => append(last(dates).add(1, "day"), dates),
  [dayjs()],
  range(1, 7 * 52),
);

function calcIsRecurringOffset({unit, mod}, startDate, currentDate) {
  return currentDate.diff(startDate, unit) % mod === 0;
}

function calcAmountForDate({result, currentDate}, {type, ...config}) {
  let addAmount = 0;

  switch (type) {
    case "days":
      addAmount = calcIsRecurringOffset(
        config.recurrence,
        config.startDate,
        currentDate,
      )
        ? config.amount
        : 0;
      break;
    case "monthly":
      addAmount = equals(config.dayOfMonth, currentDate.date())
        ? config.amount
        : 0;
  }

  return {result: result + addAmount, currentDate};
}

const calcAllForDate = curry((type, context, currentDate) => {
  const amount = prop(
    "result",
    reduce(calcAmountForDate, {result: 0, currentDate}, prop(type, context)),
  );

  return amount;
});

function cashflowReducer(
  {
    result: {balanceData, incomeData, fixedExpenseData, variableExpenseData},
    context,
  },
  currentDate,
) {
  const newIncome = calcAllForDate("income", context, currentDate);
  const newFixedExpense = calcAllForDate("fixedExpenses", context, currentDate);
  const newVariableExpense = calcAllForDate(
    "variableExpenses",
    context,
    currentDate,
  );

  const netChange = newIncome - (newFixedExpense + newVariableExpense);

  return {
    result: {
      balanceData: append(add(last(balanceData), netChange), balanceData),
      incomeData: append(add(last(incomeData), newIncome), incomeData),
      fixedExpenseData: append(
        add(last(fixedExpenseData), -1 * newFixedExpense),
        fixedExpenseData,
      ),
      variableExpenseData: append(
        add(last(variableExpenseData), -1 * newVariableExpense),
        variableExpenseData,
      ),
    },
    context,
  };
}

const context = {
  income: [
    {
      type: "days",
      label: "LogicMonitor",
      amount: 3622.3,
      startDate: dayjs("2021-08-27"),
      recurrence: {unit: "days", mod: 14},
    },
  ],
  fixedExpenses,
  variableExpenses,
};

const {
  result: {balanceData, incomeData, fixedExpenseData, variableExpenseData},
} = reduce(
  cashflowReducer,
  {
    result: {
      balanceData: [2282.88],
      incomeData: [0],
      fixedExpenseData: [0],
      variableExpenseData: [0],
    },
    context,
  },
  dates,
);

export const chartOptions = {
  chart: {
    type: "area",
    height: "600px",
    zoomType: "x",
    panning: true,
    panKey: "shift",
    scrollablePlotArea: {
      minWidth: 600,
    },
    backgroundColor: "transparent",
  },

  caption: {
    text:
      "Cashflow Projection based on Income, Fixed Expenses, Variable Expenses, and Indicental Expenses",
  },

  title: {
    text: "Peter Stradinger 2021",
    style: {color: colors.selected},
  },

  credits: {
    enabled: false,
  },

  xAxis: {
    title: {
      text: "Time",
    },
  },

  yAxis: {
    startOnTick: true,
    endOnTick: false,
    maxPadding: 0.35,
    title: {
      text: null,
    },
    labels: {
      format: "${value}",
    },
    accessibility: {
      description: "Balance",
      rangeDescription: "Range: 0 to N Dollars",
    },
  },

  legend: {
    enabled: false,
  },

  series: [
    {
      data: balanceData,
      lineColor: colors.balance,
      color: colors.balance,
      fillOpacity: 0.4,
      name: "Balance",
    },
    {
      data: incomeData,
      type: "line",
      lineColor: colors.income,
      color: colors.income,
      name: "Income",
    },
    {
      data: fixedExpenseData,
      type: "line",
      lineColor: colors.fixedExpenses,
      color: colors.fixedExpenses,
      name: "Fixed Expenses",
    },
    {
      data: variableExpenseData,
      type: "line",
      lineColor: colors.variableExpenses,
      color: colors.variableExpenses,
      name: "Variable Expenses",
    },
  ],
};
