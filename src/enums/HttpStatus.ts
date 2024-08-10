export enum HttpStatus {
  success = 200,
  created = 201,
  accepted = 202,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  conflict = 409,
  internalServerError = 500,
  serviceUnavailable = 503,
  gatewayTimeout = 504,

  // 自訂錯誤代碼
}
