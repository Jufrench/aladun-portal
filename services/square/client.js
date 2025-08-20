import { SquareClient, SquareEnvironment } from "square";

const client = new SquareClient({
  environment: SquareEnvironment.Production,
  token: process.env.VITE_SQUARE_ACCESS_TOKEN,
});

export default client;