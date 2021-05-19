/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBinanceKey = /* GraphQL */ `
  mutation CreateBinanceKey(
    $input: CreateBinanceKeyInput!
    $condition: ModelBinanceKeyConditionInput
  ) {
    createBinanceKey(input: $input, condition: $condition) {
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
export const updateBinanceKey = /* GraphQL */ `
  mutation UpdateBinanceKey(
    $input: UpdateBinanceKeyInput!
    $condition: ModelBinanceKeyConditionInput
  ) {
    updateBinanceKey(input: $input, condition: $condition) {
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
export const deleteBinanceKey = /* GraphQL */ `
  mutation DeleteBinanceKey(
    $input: DeleteBinanceKeyInput!
    $condition: ModelBinanceKeyConditionInput
  ) {
    deleteBinanceKey(input: $input, condition: $condition) {
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
