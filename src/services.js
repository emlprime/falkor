import axios from "axios";
import {prop} from "ramda";

export const makePostRecord = model => async newRecord => {
  const data = prop("payload", newRecord);
  await (await axios.post(`http://localhost:5000/${model}`, data)).data;
};

export const fetchAll = async (model) => {
    const result = await axios.get(`http://localhost:5000/${model}`);
    return prop("data", result)
};

export const deleteItem = async ({model, id}) => {
  console.log(`id:`, id);
  return await fetch(`http://localhost:5000/${model}/${id}`, {
    method: "DELETE",
  });
};
