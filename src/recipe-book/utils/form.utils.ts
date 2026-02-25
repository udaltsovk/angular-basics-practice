import { FieldTree } from "@angular/forms/signals";

export const isInvalid = <T>(field: FieldTree<T>): boolean => {
  const state = field();
  return state.touched() && state.errors().length > 0;
};
