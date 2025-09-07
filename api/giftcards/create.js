import { createGiftCard } from "../../services/square/giftcards.js";

export default async function handler(req, res) {
  try {
    const response = await createGiftCard();

    if (!response.success) {
      return res.status(400).json(response);
    } else {

      console.log('== api/giftCards/create.js ==')
      console.log('response:', response)
      console.log('===========')
      return res.status(200).json(response);
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}
