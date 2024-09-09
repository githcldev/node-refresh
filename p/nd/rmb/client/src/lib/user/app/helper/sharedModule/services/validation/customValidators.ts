import { FormArray, FormControl, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';
import { ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
export class CustomValidator {
    static customSyncValidator(control: AbstractControl = null): ValidationErrors | null {
        // console.log(control);        // return null;
        return { 'message': true }
    }
    static validateUsername(control: AbstractControl = null): 
        Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ 'newUser': 'No user with given username value' }); // resolve(null);
            }, 1000);
        })
    }
    static validateUniqueUsername(control: AbstractControl = null): 
        Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ 'alreadyUser': 'User with given username already exist. Try with different username value!' });
            }, 1000);
        })
    }
    static getValidatorsArray(validatorOrOpts){
        var allValidators: ValidatorFn[] = [];
        if(typeof(validatorOrOpts) === 'object'){
            var validatorKey = Object.keys(validatorOrOpts);
            var validatorKeySize = validatorKey.length;
            for(let i = 0; i < validatorKeySize; i++){
                switch(validatorKey[i]){
                    case 'min':
                        allValidators.push(Validators.min(validatorOrOpts[validatorKey[i]]))
                        break;
                    case 'minLength':
                        allValidators.push(Validators.minLength(validatorOrOpts[validatorKey[i]]))
                        break;
                    case 'pattern':
                        console.log(validatorOrOpts[validatorKey[i]])
                        allValidators.push(Validators.pattern(validatorOrOpts[validatorKey[i]]))
                        break;
                    case 'max':
                        allValidators.push(Validators.max(validatorOrOpts[validatorKey[i]]))
                        break;
                    case 'maxLength':
                        allValidators.push(Validators.maxLength(validatorOrOpts[validatorKey[i]]))
                        break;
                    case 'required':
                        allValidators.push(Validators.required)
                        break;
                    default:
                        break;
                }
            }
        }
        return allValidators;
    }
    static parseCustomControlValidators(validatorOrOpts): ValidatorFn | ValidatorFn[]{
        return Validators.compose(this.getValidatorsArray(validatorOrOpts));
    }
    static telephoneNumber(c: FormControl): ValidationErrors {
        const isValidPhoneNumber = /^\d{3,3}-\d{3,3}-\d{3,3}$/.test(c.value);
        const message = {
            'telephoneNumber': {
                'message': 'The phone number must be valid (XXX-XXX-XXX, where X is a digit)'
            }
        };
        return isValidPhoneNumber ? null : message;
    }
    static password(c: FormControl): ValidationErrors {
        const isValidPassword = (c.value.length < 12 && c.value.length > 8) ? true : false;
        const message = {
            'password': {
                'message': 'Min 8 or Max 12 length not match'
            }
        };
        return isValidPassword ? null : message;
    }
    static telephoneNumbers(form: FormGroup): ValidationErrors {
        const message = {
            'telephoneNumbers': {
                'message': 'At least one telephone number must be entered'
            }
        };
        const phoneNumbers = <FormArray>form.get('phoneNumbers');
        const hasPhoneNumbers = phoneNumbers && Object.keys(phoneNumbers.controls).length > 0;
        return hasPhoneNumbers ? null : message;
    }
}