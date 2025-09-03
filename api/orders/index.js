import { createOrder } from "../../services/square/orders.js";

export default async function handler(req, res) {
  try {
    const response = await createOrder(req.query.amount);

    console.log('=======')
    console.log('req.query.amount:', req.query.amount)
    console.log('=======')

    if (!response.success) {
      return res.status(400).json(response);
    } else {
      console.log('??????')
      console.log(response);
      console.log('??????')
      // response.success = true
      // response.order = order as a string
      return res.status(200).json(response);
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}