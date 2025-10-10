import { createPaymentLink } from "../../services/square/checkout.js";

export default async function handler(req, res) {
  try {
    const response = await createPaymentLink(req.body);
    console.log('/// api/giftcards/purchase.js ///')
    console.log('req.body:', req.body)
    console.log('////////////////////')

    if (!response.success) {
      return res.status(400).json(response);
    } else {
      return res.status(200).json(response);
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}
