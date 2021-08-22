export interface ActionBase<T, E> {
  type: T;
  payload: E;
}
