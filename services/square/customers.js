import squareClient from "./client.js";
import supabase from "../supabase/supabaseClient.js";
import replacer from "../../utils/json_replacer.js";

const { customers } = squareClient;

export async function listCustomers() {
  try {
    const response = await customers.list({});
    return JSON.stringify(response.response.customers, replacer);
  } catch(error) {
    console.log('ERROR:', error);
  }
}

export async function createSquareCustomer(customerInfo) {
  try {
    console.log('=== change db "test" to "profiles" when done testing ===');
    const { emailAddress, givenName, familyName } = customerInfo;
    const { data, /* error */ } = await supabase.from('test').insert({
      email_address: emailAddress,
      given_name: givenName,
      family_name: familyName
    }).select();
    // TODO: Hande error property
    return data;
  } catch(error) {
    console.log('ERROR:', error);
  }
}