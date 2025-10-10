import { createGiftCard, createGiftCardActivity } from "../../services/square/giftcards.js"
import { retrieveOrder } from "../../services/square/orders.js";

export default async function handler(req, res) {
  console.log('=== payment-updated.js ===')
  console.log('req.body:', req.body)
  console.log('===============')
  try {
    const paymentStatus = req.body.data.object.payment.status;
    if (paymentStatus === "COMPLETED") {
      const orderId = req.body.data.object.payment.order_id;

      console.log("....payment-updated.js.....")
      // console.log('req.body:', req.body)
      console.log('req.body.data.object.payment:', req.body.data.object.payment)
      console.log(".........")

      // Get order
      const orderResponse = await retrieveOrder(orderId);
      console.log('=== payment-updated.js (ORDER RESPONSE) ===')
      console.log('orderResponse:', orderResponse)
      console.log('===============')

      if (!orderResponse.success) {
        return res.status(400).json(orderResponse);
      }

      // Create Gift Card
      const giftCardResponse = await createGiftCard();
      console.log('=== payment-updated.js (GIFTCARD RESPONSE) ===')
      console.log('giftCardResponse:', giftCardResponse)
      console.log('===============')
      if (!giftCardResponse.success) {
        return res.status(400).json(giftCardResponse);
      }

      // Create gift card activity here
      const giftCardActivityResponse = await createGiftCardActivity({
        orderId: orderResponse.order.id,
        lineItemUid: orderResponse.order.lineItems[0].uid,
        giftCardId: giftCardResponse.giftCard.id
      });

      console.log('=== payment-updated.js - giftCardActivityResponse ===')
      console.log('giftCardActivityResponse:', giftCardActivityResponse)
      console.log('===========')

      return res.status(200).json(giftCardActivityResponse);
    }

    return res.status(200).json({ success: true, status: "ok" });
  } catch(error) {
    console.log('ERROR:', error)
    return res.status(500).json({ error: error.message || "An unexpected error occurred." });
  }
}