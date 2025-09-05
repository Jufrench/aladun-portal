import { createPaymentLink } from "../../services/square/checkout";

export default async function handler(req, res) {
  try {
    const response = await createPaymentLink();

    if (!response.success) {
      return res.status(400).json(response);
    } else {
      console.log('..........')
      console.log('response:', response)
      console.log('..........')
      return res.status(200).json(response);
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}