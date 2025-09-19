import squareClient from "./client.js";
// import replacer from "../../utils/json_replacer.js";
import * as crypto from 'node:crypto';

const { orders } = squareClient;

export async function createOrder(order) {
  try {
    const idempotencyKey = crypto.randomUUID();
    const response = await orders.create({
      order: {
            lineItems: [
                {
                    name: "eGiftCard via API",
                    quantity: "1",
                    itemType: "GIFT_CARD",
                    basePriceMoney: {
                        amount: BigInt(Number(order.giftCardValue+"00")),
                        currency: "USD",
                    },
                },
            ],
            locationId: process.env.SQUARE_LOCATION_ID,
            discounts: [
                {
                    type: "FIXED_AMOUNT",
                    amountMoney: {
                        amount: BigInt(Number(
                          order.giftCardValue-order.discountedPrice+"00"
                        )),
                        currency: "USD",
                    },
                    name: order.cardDescription,
                },
            ],
        },
        idempotencyKey,
    });
    
    if (response.errors && response.errors.length > 0) {
      return {
        success: false,
        code: response.errors[0].code,
        details: response.errors[0].details,
        category: response.errors[0].category
      };
    }

    // return {
    //   success: true,
    //   giftCards: JSON.stringify(response.response.order, replacer)
    // }
  } catch(error) {
    console.log('ERROR:', error);
  }
}

export async function retrieveOrder(orderId) {
  try {
    const response = await orders.get({ orderId });

    if (response.errors && response.errors.length > 0) {
      return {
        success: false,
        code: response.errors[0].code,
        details: response.errors[0].details,
        category: response.errors[0].category
      };
    }

    return {
      success: true,
      // order: JSON.stringify(response.order, replacer)
      order: response.order
    };
  } catch(error) {
    console.log('ERROR:', error);
  }
}