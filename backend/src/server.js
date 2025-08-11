import dotenv from 'dotenv';

import express from 'express';
import cors from 'cors';
import { SquareClient, SquareEnvironment } from "square";
import { createClient } from '@supabase/supabase-js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

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
  try {
    const response = await customers.list({});
    return JSON.stringify(response.response.customers, replacer);
    // return responseString;
  } catch (error) {
    console.log('ERROR', error);
  }
}

async function retrieveCustomer(id) {
  try {
    const response = await customers.get({ customerId: id });
    return JSON.stringify(response.customer, replacer);
    // return responseString;
  } catch(error) {
    console.log('ERROR:', error);
  }
}

async function searchCustomer(filterValue, filterType = "emailAddress") {
  try {
    const response = await customers.search({
      query: {
        filter: {
          [filterType]: {
            fuzzy: filterValue
          }
        }
      }
    });
    // console.log('response ///>:', response)
    return JSON.stringify(response.customers, replacer);
  } catch(error) {
    console.log('ERROR:', error);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/customers', async (req, res) => {
  try {
    const customers = await listCustomers();
    res.send(customers);
  } catch(error) {
    console.log('ERROR:', error);
  }
});

app.get('/customer/:id', async (req, res) => {
  try {
    const customer = await retrieveCustomer(req.params.id);
    res.send(customer);
  } catch(error) {
    console.log('ERROR:', error);
  }
});

app.get('/customer/search/:filter', async (req, res) => {
  try {
    const customer = await searchCustomer(req.params.filter);
    res.send(customer);
  } catch(error) {
    console.log('ERROR:', error);
  }
});

