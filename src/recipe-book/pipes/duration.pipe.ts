import { Pipe, PipeTransform } from "@angular/core";
import { pluralize, UnitForms } from "../utils/pluralize";

const hourForms: UnitForms = {
  nominative: "час",
  accusative: "часа",
  genitive: "часов",
};
const minuteForms: UnitForms = {
  nominative: "минута",
  accusative: "минуты",
  genitive: "минут",
};

function format(value: number, forms: UnitForms): string {
  if (value <= 0) {
    return "";
  }

  return `${value} ${pluralize(value, forms)}`;
}

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${format(hours, hourForms)} ${format(minutes, minuteForms)}`.trim();
  }
}
