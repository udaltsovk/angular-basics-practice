import { Pipe, PipeTransform } from "@angular/core";

type UnitForms = {
  nominative: string;
  accusative: string;
  genitive: string;
};

const forms = {
  hour: {
    nominative: "час",
    accusative: "часа",
    genitive: "часов",
  },
  minute: {
    nominative: "минута",
    accusative: "минуты",
    genitive: "минут",
  },
};

function format(value: number, unitForms: UnitForms): string {
  if (value <= 0) {
    return "";
  }

  const unit =
    value % 10 === 1 && value % 100 !== 11
      ? unitForms.nominative
      : value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)
        ? unitForms.accusative
        : unitForms.genitive;

  return `${value} ${unit}`;
}

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${format(hours, forms.hour)} ${format(minutes, forms.minute)}`.trim();
  }
}
