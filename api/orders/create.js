import { createOrder } from "../../services/square/orders.js";

export default async function handler(req, res) {
  console.log("=== orders/create.js ===")
  console.log('req:', req.body)
  console.log("===========")
  try {
    const response = await createOrder(req.body);
    if (!response.success) {
      return res.status(400).json(response);
    } else {
      return res.status(200).json(response);
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}