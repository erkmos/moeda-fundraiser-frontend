export interface Action<T>{
  type: string;
  payload: T;
  error?: boolean;
  loading?: boolean;
}
