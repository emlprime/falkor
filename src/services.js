import axios from "axios";
import {prop} from "ramda";

export const createItem = model => async newRecord => {
  const data = prop("payload", newRecord);
  const result = await axios.post(`http://localhost:5000/${model}`, data);
  return [prop("data", result)];
};

export const fetchAll = async model => {
  const result = await axios.get(`http://localhost:5000/${model}`);
  return prop("data", result);
};

export const deleteItem = async ({model, id}) => {
  console.log(`id:`, id);
  return await fetch(`http://localhost:5000/${model}/${id}`, {
    method: "DELETE",
  });
};
