import { DoCheck, Directive, ElementRef, HostListener, Optional } from "@angular/core";
import { NgModel } from "@angular/forms";
@Directive({
    selector: 'input[r-input-d]',
    host: {
        '[class.ui-inputtext]': 'true',
        '[class.ui-corner-all]': 'true',
        '[class.ui-state-default]': 'true',
        '[class.ui-widget]': 'true',
        '[class.ui-state-filled]': 'filled'
    }
})
export class RInputD implements DoCheck {
    filled: boolean;
    constructor(public el: ElementRef, @Optional() public ngModel: NgModel) {}
    ngDoCheck() {
        this.updateFilledState();
    }
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    @HostListener('input', ['$event']) 
    onInput(e: Event) {
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
                        (this.ngModel && this.ngModel.model);
    }
}