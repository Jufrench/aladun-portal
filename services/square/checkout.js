import squareClient from "./client.js";
import replacer from "../../utils/json_replacer.js";
import * as crypto from 'node:crypto';

const { checkout } = squareClient;

export async function createPaymentLink(order) {
  const finalOrder = {
    locationId: process.env.SQUARE_LOCATION_ID,
    lineItems: [
      {
        quantity: "1",
        itemType: "GIFT_CARD",
        basePriceMoney: {
            amount: BigInt(Number(order.giftCardValue+"00")),
            currency: "USD",
        },
        name: "Class Card",
      }
    ],
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
  };

  const buyerData = {
    buyerAddress: {
      firstName: order.firstName,
      lastName: order.lastName,
    },
    buyerEmail: order.email,
    buyerPhoneNumber: order.phone,
  };

  try {
    const idempotencyKey = crypto.randomUUID();
    const response = await checkout.paymentLinks.create({
      idempotencyKey,
      order: finalOrder,
      prePopulatedData: buyerData
    });

    if (response.errors && response.errors.length > 0) {
      return {
        success: false,
        code: response.errors[0].code,
        detail: response.errors[0].detail,
        category: response.errors[0].category
      }
    }

    return {
      success: true,
      paymentLink: JSON.stringify(response.paymentLink, replacer)
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}
