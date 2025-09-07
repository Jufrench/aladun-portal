import squareClient from "./client.js";
import replacer from "../../utils/json_replacer.js";

const { giftCards } = squareClient;

export async function listGiftCards(customerId) {
  try {
    const response = await giftCards.list({ customerId });

    if (response.errors && response.errors.length > 0) {
      return {
        success: false,
        code: response.errors[0].code,
        details: response.errors[0].details,
        category: response.errors[0].category
      }
    }

    return {
      success: true,
      giftCards: JSON.stringify(response.response.giftCards, replacer)
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}

export async function createGiftCard(params) {
  try {
    const idempotencyKey = crypto.randomUUID();
    const response = await giftCards.create({
      giftCard: {
        type: "DIGITAL",
      },
      locationId: process.env.SQUARE_LOCATION_ID,
      idempotencyKey,
    });

    if (response.errors && response.errors.length > 0) {
      return {
        success: false,
        code: response.errors[0].code,
        details: response.errors[0].details,
        category: response.errors[0].category
      }
    }

    console.log('== square/giftCards.js ==')
    console.log('response:', response)
    console.log('=========')

    return {
      success: true,
      giftCards: JSON.stringify(response.giftCard, replacer)
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}