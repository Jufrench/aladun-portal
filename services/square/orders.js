import squareClient from "./client.js";
import replacer from "../../utils/json_replacer.js";
import * as crypto from 'node:crypto';

const { orders } = squareClient;

export async function createOrder(orderAmount) {
  const idempotencyKey = crypto.randomUUID();

  try {
    const response = await orders.create({
      order: {
        lineItems: [
          {
              name: "eGiftCard via API",
              quantity: "1",
              itemType: "GIFT_CARD",
              basePriceMoney: {
                  amount: BigInt(orderAmount),
                  currency: "USD",
              },
          },
        ],
        // locationId: "{LOCATION_ID}",
        // locationId: "LATW8WEQ4J06D",
        locationId: "HYTQ5X9Z68HCC",
        discounts: [
            {
                type: "FIXED_AMOUNT",
                amountMoney: {
                    amount: BigInt("20"),
                    currency: "USD",
                },
                name: "5 for 80",
            },
        ],
      },
      idempotencyKey: idempotencyKey,
    });
    console.log('=============')
    console.log('response:', response)
    console.log('=============')
    if (response.errors && response.errors.length > 0) {
      return {
        success: false,
        code: response.errors[0].code,
        details: response.errors[0].details,
        category: response.errors[0].category
      }
    }
    // return JSON.stringify(response.order, replacer);
    return {
      success: true,
      order: JSON.stringify(response.order, replacer)
    };
  } catch(error) {
    console.log('ERROR:', error);
  }
}
