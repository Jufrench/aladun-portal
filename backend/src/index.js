import dotenv from 'dotenv';

import express from 'express';
import cors from 'cors';
import { SquareClient, SquareEnvironment } from "square";
import { createClient } from '@supabase/supabase-js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const supabaseUrl = 'https://cwglurtxzmmevrtcnjgv.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Sandbox
// const client = new SquareClient({
//     environment: SquareEnvironment.Sandbox,
//     // token: "YOUR_ACCESS_TOKEN",
//     token: "EAAAl7uUQNoPZiirV2e38s3HwBopUPKl5VOCXYKRoTcDSKYvAQvL-C0PY-dW-y2N",
// });

// Production
const client = new SquareClient({
  environment: SquareEnvironment.Production,
  token: process.env.SQUARE_ACCESS_TOKEN,
});

const { customers } = client;

// Manages BigInt type
const replacer = (key, value) => {
  if (typeof value === 'bigint') {
    return value.toString();
  }
  return value;
};

async function listCustomers() {
  const response = await customers.list({});
  return JSON.stringify(response.response.customers, replacer);
}

async function retrieveCustomer(id) {
  const response = await customers.get({ customerId: id });
  return JSON.stringify(response.customer, replacer);
}

async function searchCustomer(filterValue, filterType = "emailAddress") {
  const response = await customers.search({
    query: {
      filter: {
        [filterType]: {
          fuzzy: filterValue
        }
      }
    }
  });
  return JSON.stringify(response.customers, replacer);
}

async function createCustomer(customerInfo) {
  const { emailAddress, givenName, familyName } = customerInfo;
  const response = await supabase.from('profiles').insert({
    email_address: emailAddress,
    given_name: givenName,
    family_name: familyName
  });
  console.log('response:', response)
  res.send(response);
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/customers/list', async (req, res) => {
  try {
    const customers = await listCustomers();
    res.send(customers);
  } catch(error) {
    console.log('ERROR:', error);
  }
});

app.get('/customers/:id', async (req, res) => {
  try {
    const customer = await retrieveCustomer(req.params.id);
    res.send(customer);
  } catch(error) {
    console.log('ERROR:', error);
  }
});

app.get('/customers/search/:filter', async (req, res) => {
  try {
    const customer = await searchCustomer(req.params.filter);
    res.send(customer);
  } catch(error) {
    console.log('ERROR:', error);
  }
});

app.post('/customers/create', async (req, res) => {
  const { emailAddress, givenName, familyName } = req.body;
  createCustomer({ emailAddress, givenName, familyName });

  try {
    const response = await supabase.from('profiles').insert({
      email_address: emailAddress,
      given_name: givenName,
      family_name: familyName
    });
    console.log('response:', response)
    res.send(response);
  } catch(error) {
    console.log('ERROR:', error);
  }
});

// const { data, error, record } = await supabase.functions.invoke('sync-square-customer', {
//   body: { name: 'myName' },
// })


