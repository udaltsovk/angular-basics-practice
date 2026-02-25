import {
  EMPTY_FILTERS_FORM_MODEL,
  FiltersFormModel,
} from "../../components/forms/filters/filters.model";

export type FilterFormModel = {
  search: string;
  filters: FiltersFormModel;
};

export const EMPTY_FILTER_FORM_MODEL: FilterFormModel = {
  search: "",
  filters: EMPTY_FILTERS_FORM_MODEL,
};
