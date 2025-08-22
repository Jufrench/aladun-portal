import squareClient from "./client.js";
import supabase from "../supabase/supabaseClient.js";
import replacer from "../../utils/json_replacer.js";

const { customers } = squareClient;

export async function listCustomers() {
  const response = await customers.list({});
  return JSON.stringify(response.response.customers, replacer);
}

export async function createSquareCustomer(customerInfo) {
  const { emailAddress, givenName, familyName } = customerInfo;

  console.log('=== change db "test" to "profiles" when done testing ===');

  const { data, error } = await supabase.from('test').insert({
    email_address: emailAddress,
    given_name: givenName,
    family_name: familyName
  }).select();

  if (error) throw error;
  return data;
}