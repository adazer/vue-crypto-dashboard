/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBinanceKey = /* GraphQL */ `
  query GetBinanceKey($id: ID!) {
    getBinanceKey(id: $id) {
      id
      provider
      apiKey
      secretKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBinanceKeys = /* GraphQL */ `
  query ListBinanceKeys(
    $filter: ModelBinanceKeyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBinanceKeys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        provider
        apiKey
        secretKey
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
