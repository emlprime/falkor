import {always, cond, equals, test, T} from "ramda";

export const deriveCategory = ({label}) => {
  const category = cond([
    // fixed
    [test(/(Rent|hot)/i), always("Shelter")],
    [test(/(netflix|1password|github|hulu)/i), always("Internet")],
    [test(/quokka|kombucha|groceries/i), always("Food")],
    [test(/kclu/i), always("Charitable Giving")],
    [test(/stocklabs/i), always("Investing")],
    [test(/(jill|kristen|yoga)/i), always("Personal Development")],
    [test(/audible/i), always("Reading")],
    [test(/kilo/i), always("Kids/Kilo")],
    [test(/sylvan/i), always("Kids/Sylvan")],
    // variable
    [test(/fuel/i), always("Transportation")],
    [test(/(apiary|restaurant|movies|games)/i), always("Outings")],
    [test(/(eleven|amazon|cvs)/i), always("Kids/Sylvan")],
    [test(/(onlyfans)/i), always("Porn")],
    [T, always("OTHER")],
  ])(label);

  if (equals(category, "OTHER")) console.log("other:", label);
  return category;
};
