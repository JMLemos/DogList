import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  transform(value: "F" | "M" ) {
    if (value == "F" ){
        return "Fêmea"
    }
    else{
        return "Macho"
    }
  }
}