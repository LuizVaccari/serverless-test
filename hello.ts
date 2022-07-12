import { APIGatewayEvent } from "aws-lambda";

export const handle = async (event: APIGatewayEvent) => ({
  statusCode: 200,
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(
    {
      message: "Hello",
      event
    },
    null,
    2
  ),
});