import { createSquareCustomer } from "../../services/square/customers.js";

export default async function handler(req, res) {
  try {
    const customer = await createSquareCustomer(req.body);
    res.status(200).json(customer);
  } catch(error) {
    console.log('ERROR:', error);
  }
}