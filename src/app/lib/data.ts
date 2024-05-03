const { Client, Environment, ApiError } = require("square")

const client = new Client({
  bearerAuthCredentials: {
    // accessToken: process.env.SQUARE_ACCESS_TOKEN
  },
  // environment: Environment.Sandbox,
  environment: Environment.Production,
});

const { customersApi } = client;
// const apiError = new ApiError();

export async function getAllCustomers() {
  try {
    const response = await customersApi.listCustomers();

    console.log('////////////////////////////')
    console.log('////////////////////////////')
    console.log('////////////////////////////')
    console.log(response);
    return response.result.customers;
  } catch(error) {
    console.log('error:', error)
    // console.log('apiError:', apiError)
  }
}