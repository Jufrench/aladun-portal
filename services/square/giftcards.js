import squareClient from "./client.js";
import replacer from "../../utils/json_replacer.js";
import * as crypto from 'node:crypto'

const { giftCards } = squareClient;

export async function listGiftCards(customerId) {
  try {
    const response = await giftCards.list({ customerId });
    // const response = await giftCards.list({ customerId: 'X7KBVHBA7XA7EJ0F5RE0JVX7FC' });

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

export async function createGiftCard() {
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

    console.log('=== giftCards.js - createGiftCard ==')
    console.log('response:', response)
    console.log('============')

    return {
      success: true,
      giftCard: response.giftCard
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}

export async function createGiftCardActivity(activityParams) {
  console.log('=== giftCards.js - createGiftCardActivity ===')
  console.log('activityParams:', activityParams)
  console.log('=================')

  try {
    const idempotencyKey = crypto.randomUUID();
    const response = await giftCards.activities.create({
      giftCardActivity: {
        type: "ACTIVATE",
        locationId: process.env.SQUARE_LOCATION_ID,
        activateActivityDetails: {
            orderId: activityParams.orderId,
            lineItemUid: activityParams.lineItemUid,
        },
        giftCardId: activityParams.giftCardId,
      },
      idempotencyKey,
    });

    console.log('=== giftCards.js - createGiftCardActivity ===')
    console.log('response:', response)
    console.log('==============')

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
      giftCardActivity: JSON.stringify(response.giftCardActivity, replacer)
    };
  } catch(error) {
    console.log('ERROR:', error)
  }
}