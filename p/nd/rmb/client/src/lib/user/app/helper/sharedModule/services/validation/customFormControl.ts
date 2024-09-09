import { FormControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CustomValidator } from './customValidators';
export class CustomFormControl extends FormControl {
    public name: string;
    public type;
    public placeholder: string;
    public icon: IconDefinition;
    private controlValidators: Object = {};
    constructor(formState: any = null, 
        validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
        asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null, ...customArgs: any[] | null){
            super(formState, validatorOrOpts, asyncValidator);
            // Destructive assignment for array
            [this.name, this.type, this.placeholder, this.icon] = customArgs || null;
    }
    setName(name: string){
        this.name = name;
        return this
    }
    setType(type: string){
        this.type = type;
        return this;
    }
    setPlaceholder(placeholder: string){
        this.placeholder = placeholder;
        return this;
    }
    setIcon(icon: IconDefinition){
        this.icon = icon;
        return this;
    }
    addValidators(validatorOrOpts: Object){
        for(let key in validatorOrOpts){
            this.controlValidators[key] = validatorOrOpts[key]; 
        }
        this.setValidators(CustomValidator.parseCustomControlValidators(this.controlValidators));
        return this;
    }
    addValidator(key: string, value: string = null){
        this.controlValidators[key] = value;
        this.setValidators(CustomValidator.parseCustomControlValidators(this.controlValidators));
        return this;
    }
}