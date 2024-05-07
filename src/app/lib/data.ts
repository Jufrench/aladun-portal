const { Client, Environment, ApiError } = require("square")

const client = new Client({
  bearerAuthCredentials: {
    // accessToken: process.env.SQUARE_ACCESS_TOKEN
  },
  // environment: Environment.Sandbox,
  environment: Environment.Production,
});

const {
  customersApi,
  giftCardsApi,
  giftCardActivitiesApi,
  customerCustomAttributesApi
} = client;
// const apiError = new ApiError();

export async function listCustomers() {
  try {
    const response = await customersApi.listCustomers();

    // console.log('////////////////////////////')
    // console.log('////////////////////////////')

    // console.log(response);
    return response.result.customers;
  } catch(error) {
    console.log('error:', error)
  }
}

export async function retrieveCustomer(customer_id: string) {
  try {
    const response = await customersApi.retrieveCustomer(customer_id);

    // console.log('////////////////////////////')
    // console.log('=============================')

    // console.log(response.result.customer);
    return response.result.customer;
  } catch(error) {
    console.log('error:', error)
  }
}

export async function listGiftCards(customer_id: string) {
  try {
    const response = await giftCardsApi.listGiftCards(
      undefined, undefined, undefined, undefined, customer_id);

    // console.log('////////////////////////////')
    // console.log('=============================')
    // console.log(response.result.giftCards);

    return response.result.giftCards;
  } catch(error) {
    console.log('error:', error)
  }
}

export async function listGiftCardActivities(gift_card_id: string) {
  // 'use server'
  try {
    const response = await giftCardActivitiesApi.listGiftCardActivities(gift_card_id);

    console.log('////////////////////////////')
    console.log('=============================')
    console.log(response.result.giftCardActivities);

    return response.result.giftCardActivities;
  } catch(error) {
    console.log('error:', error)
  }
}

export async function listCustomerCustomAttributes(customer_id: string) {
  try {
    const response = await customerCustomAttributesApi.listCustomerCustomAttributes(
      customer_id, undefined, undefined, true);

    // console.log('=============================')
    // console.log('=============================')
    // console.log(response.result.customAttributes);

    return response.result.customAttributes;
  } catch(error) {
    console.log('error:', error)
  }
}