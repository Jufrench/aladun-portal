const { Client, Environment, ApiError } = require("square")

const client = new Client({
  bearerAuthCredentials: {
    // accessToken: process.env.SQUARE_ACCESS_TOKEN
    // accessToken: 'EAAAl7uUQNoPZiirV2e38s3HwBopUPKl5VOCXYKRoTcDSKYvAQvL-C0PY-dW-y2N' // sandbox
    
  },
  // environment: Environment.Sandbox,
  environment: Environment.Production,
});

const { customersApi } = client;
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