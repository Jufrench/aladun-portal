import { listGiftCards } from "../../services/square/giftcards.js";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const response = await listGiftCards(req.query.customerId)

      if (!response.success) {
        return res.status(400).json(response);
      } else {
        return res.status(200).json(response.giftCards);
      }
    }

    if (req.method === "POST") {}

    // return res.status(405).json({ success: false, error: "Method not allowed" });
  } catch(error) {
    console.log('ERROR:', error);
  }
}