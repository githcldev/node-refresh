import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, AbstractControl, FormGroup } from '@angular/forms';
import { faUser, faKey, faAt, faSignInAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { debounceTime } from 'rxjs/operators';
import { GlobalValidator } from '../../../../../../app/helper/sharedModule/services/validation/globalValidator';
import { CustomFormControl } from '../../../../../../app/helper/sharedModule/services/validation/customFormControl';
import { CustomValidator } from '../../../../../../app/helper/sharedModule/services/validation/customValidators';
/** TODO SECTION
 *      production build error: formGroup is not known property of form
 *      if new user confirm password match
 *      submit btn gets enable without waiting completion of asyncValidators
 *      submit btn should remain disable untill async validation completes
 *  IMPORTANT POINTERS
 *      .setValidators(CustomValidator.customSyncValidator)
 */
export const ROOT_SELECTOR = 'sign-up-form';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
    styleUrls: ['./styles.less'],
    encapsulation: ViewEncapsulation.None
})
export class SignUpFormComp implements OnInit {
    showForm: boolean = false; showSignUp: boolean = false;
    newUserLevel: string;
    userLoginForm: FormGroup; usernameValidateDebounceTime = 500;
    faSignInAlt = faSignInAlt; faPlus = faPlus;
    constructor(private _fb: FormBuilder, private gV: GlobalValidator) {
    }
    validateUsername(control: AbstractControl = null) {}
    validateUniqueUsername(control: AbstractControl = null) {}
    buildForm() {
        this.userLoginForm = this._fb.group({
            'username': new CustomFormControl('')
                .setName('username')
                .setType('text')
                .setPlaceholder('Username')
                .setIcon(faUser)
                .addValidators({ minLength: 3, maxLength: 5 }),
            'signUpCheck': this.showSignUp,
            'newUserInfo': this._fb.array([])
        }); // updateOn: 'change' | 'blur' | 'submit'
        this.gV.setValidators(this.userLoginForm);
        this.userLoginForm.get('username').setAsyncValidators(CustomValidator.validateUsername);
        // Do not remove below commented line shows usage of customSyncValidator
        // this.userLoginForm.get('username').setValidators(CustomValidator.customSyncValidator);
    }
    bindUsernameChange() {
        var domEl = this.userLoginForm.get('username') as FormControl;
        domEl.valueChanges.pipe(debounceTime(this.usernameValidateDebounceTime))
            .subscribe(function handleChangeValue() {
                // Validate username based on signUpCheck
                if (this.showSignUp) {
                    this.validateUniqueUsername();
                } else {
                    this.validateUsername();
                }
            }.bind(this));
    }
    bindSignUpCheckChange() {
        var domEl = this.userLoginForm.get('signUpCheck') as FormControl;
        domEl.valueChanges.subscribe(function handleChangeValue(value: boolean) {
            var domArrEl = this.userLoginForm.get("newUserInfo") as FormArray;
            if (!!value) {
                domArrEl.push(new CustomFormControl('', null, null, 'configPassword', 'text', 'Confirm Password', faKey))
                domArrEl.push(new CustomFormControl('', null, null, 'email', 'email', 'Email', faAt))
                domArrEl.push(new CustomFormControl('', null, null, 'date', 'date', 'D.O.B.'))
                domArrEl.push(new CustomFormControl(false, null, null, 'js', 'checkbox', 'Interest in Js'))
                domArrEl.push(new CustomFormControl(false, null, null, 'ng', 'checkbox', 'Interest in Ng'))
                domArrEl.push(new CustomFormControl(false, null, null, 'node', 'checkbox', 'Interest in Node'))
                domArrEl.push(new CustomFormControl(false, null, null, 'mongo', 'checkbox', 'Interest in Mongo'))
                domArrEl.push(new CustomFormControl(false, null, null, 'express', 'checkbox', 'Interest in Express'))
                domArrEl.push(new CustomFormControl(false, null, null, 'level', 'radio', 'Current level is Beginner'))
                domArrEl.push(new CustomFormControl(false, null, null, 'level', 'radio', 'Current level is Intermediat'))
                domArrEl.push(new CustomFormControl(false, null, null, 'level', 'radio', 'Current level is Advance'))
                this.gV.setValidators(domArrEl, Validators.required);
                this.userLoginForm.get('username').setAsyncValidators(CustomValidator.validateUniqueUsername);
                console.log(domArrEl);
            } else {
                this.userLoginForm.get('username').setAsyncValidators(CustomValidator.validateUsername);
                var domArrElSize = domArrEl.controls.length;
                for (let i = 0; i < domArrElSize; i++) {
                    domArrEl.removeAt(0);
                }
            }
        }.bind(this));
    }
    levelChange(name: string, placeholder: string) {
        if(name === "level") this.newUserLevel = placeholder.split(" ")[3].toLowerCase();
    }
    ngOnInit() {
        this.buildForm();
        this.bindUsernameChange();
        this.bindSignUpCheckChange();
        this.showForm = true;
        // setTimeout(() => {
        //     this.userLoginForm.controls.signUpCheck.patchValue(true);
        // }, 300);
    }
    hit() {
        // TODO: If new user than 
        // console.log(this.userLoginForm.controls.newUserInfo.value);
        console.log(this.userLoginForm.controls);
    }
}