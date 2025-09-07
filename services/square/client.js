import { SquareClient, SquareEnvironment } from "square";

const client = new SquareClient({
  environment:
    process.env.NODE_ENV === "production"
      ? SquareEnvironment.Production
      : SquareEnvironment.Sandbox,
  token: process.env.SQUARE_ACCESS_TOKEN,
});

export default client;