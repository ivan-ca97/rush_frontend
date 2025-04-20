// type RawPrimitive = string | number | boolean | null | undefined;
type ToRaw<T> =
  T extends Date ? string :
  T extends number ? string :
  T extends boolean ? string :
  T extends Array<infer U> ? Raw<U>[] :
  T extends object ? Raw<T> :
  T;

export type Raw<T> = {
  [K in keyof T]: ToRaw<T[K]>;
};

export default Raw