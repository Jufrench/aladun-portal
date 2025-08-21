import { listCustomers } from "../../services/square/customers.js";

export default async function handler(req, res) {
  try {
    const response = await listCustomers();
    res.status(200).json(response);
  } catch(error) {
    console.log('ERROR:', error);
  }
}