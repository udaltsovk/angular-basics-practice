import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "enumeration",
})
export class EnumerationPipe implements PipeTransform {
  transform = (items: string[]): string => items.join(", ");
}
