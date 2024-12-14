export enum API_RESULT_TYPE {
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
  UNAUTHORIZED = 'UNAUTHORIZED',
  BAD_REQUEST = 'BAD_REQUEST',
  API_LIMIT_EXCEEDED = 'API_LIMIT_EXCEEDED',
}

export interface ApiResponse<T = any> {
  resultType: API_RESULT_TYPE;
  result: T;
  error: string;
}
