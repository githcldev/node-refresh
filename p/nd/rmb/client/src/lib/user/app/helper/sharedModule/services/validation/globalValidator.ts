import { FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable()
export class GlobalValidator {
    constructor(){}
    setValidators(f: FormGroup, ...validators: ValidatorFn[] | null): FormGroup {
        // Return if no controls in group to set validators
        if(typeof f.controls !== "object"){ return null; }
        var fControlsKeys: Array<string> = Object.keys(f.controls);
        // Return if no controls available to set validation
        if(fControlsKeys.length < 1){ return null; }
        fControlsKeys.forEach(function setValidator(currentControlKey: string, index: number){
            // test it should not be a control not a group
            // if current control is form group then recursion
            // TODO: Make it compatible for both fG and fA
            if(typeof f.get(currentControlKey)["controls"] !== 'undefined'){
                this.setValidators(f.get(currentControlKey));
            } else if(['checkbox', 'radio'].indexOf(f.get(currentControlKey)['type']) === -1){
                try{
                    f.get(currentControlKey)['addValidator']('required')
                } catch(err){
                    f.get(currentControlKey).setValidators(Validators.required);
                }
            }	
        }.bind(this));
        return f;
    }
}