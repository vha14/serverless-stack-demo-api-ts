import * as AWS from "aws-sdk";

export function call(action: string, params: any): Promise<any> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}
