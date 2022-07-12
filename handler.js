//import {getCustomers} from "./model"
const getCustomer = require('./model').getCustomers
'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!  1',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getCustomers = async (event) => {
  const response = await getCustomer()
  console.log(`Response value ------------------> ${response}`)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: JSON.stringify({response}),
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
