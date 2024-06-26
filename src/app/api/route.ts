const { Client, Environment, ApiError } = require("square")

const client = new Client({
  bearerAuthCredentials: {
    // accessToken: process.env.SQUARE_ACCESS_TOKEN
    accessToken: 'EAAAlp3qkJYZaZqAY21KXgprwSHgN_oP5-Fe6I3T7ot_vQMrDsZUkJzusGrnDAm4'
  },
  // environment: Environment.Sandbox,
  environment: Environment.Production,
});

const { customersApi, giftCardActivitiesApi } = client;
// const apiError = new ApiError();

export async function getAllCustomers2() {
  try {
    const response = await customersApi.listCustomers();

    console.log('////////////////////////////')
    console.log('////////////////////////////')
    console.log('////////////////////////////')
    console.log(response);
    // return response.result.customers;
    return 'hello!'
  } catch(error) {
    console.log('error:', error)
    // console.log('apiError:', apiError)
  }
}

export async function getActivity(gift_card_id: string) {
    'use server'
    try {
      const response = await giftCardActivitiesApi.listGiftCardActivities(gift_card_id);
  
      // console.log('////////////////////////////')
      // console.log('=============================')
      // console.log(response.result.giftCardActivities);
  
      return response.result.giftCardActivities;
    } catch(error) {
      console.log('error:', error)
    }
}