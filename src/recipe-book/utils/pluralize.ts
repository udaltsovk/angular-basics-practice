export type UnitForms = {
  nominative: string;
  accusative: string;
  genitive: string;
};

export function pluralize(value: number, forms: UnitForms): string {
  if (value % 1 !== 0) {
    return forms.accusative;
  }

  const mod10 = value % 10;
  const mod100 = value % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return forms.nominative;
  } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return forms.accusative;
  } else {
    return forms.genitive;
  }
}
