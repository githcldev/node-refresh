import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraModule } from './infra/module';
import { SharedServicesModule } from './services/module';
@NgModule({
  imports: [ CommonModule, InfraModule, SharedServicesModule ],
  exports : [
    CommonModule, InfraModule, SharedServicesModule
  ],
  providers: [ ],
})
export class SharedModule { }
