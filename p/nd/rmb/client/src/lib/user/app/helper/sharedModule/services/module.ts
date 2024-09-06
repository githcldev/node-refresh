import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth';
import { CredentialValidtorService } from './validation/credential';
import { CustomValidator } from './validation/customValidators';
import { CustomFormControl } from './validation/customFormControl';
import { GlobalValidator } from './validation/globalValidator';
@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports : [
    CommonModule
  ],
  providers: [
    AuthService, CredentialValidtorService, 
    GlobalValidator
  ]
})
export class SharedServicesModule { }
