import { Directive, ElementRef, Input, ViewContainerRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[genderDirective]',
})
export class GenderDirective implements OnChanges {
  @Input() genderDirective?: "F" | "M";
  
  constructor(private element: ElementRef) {}

  ngOnChanges(): void {

    if (this.genderDirective == "F"){
        this.element.nativeElement.style.backgroundColor = "#ffb0ee";
    }
    else if (this.genderDirective == "M"){
        this.element.nativeElement.style.backgroundColor = "#b0eeff";
    }
    else{
        this.element.nativeElement.style.backgroundColor = "#fff";
        
    }

  }
}