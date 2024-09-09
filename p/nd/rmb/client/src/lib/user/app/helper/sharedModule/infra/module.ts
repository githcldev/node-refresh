import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/components/tabmenu/tabmenu';
import { TopNavComp } from './modules/partials/top-nav/comp';
import { RInputD } from './directives/rinput';
@NgModule({
  imports: [ CommonModule, RouterModule, TabMenuModule ],
  exports : [
    CommonModule, TopNavComp, RInputD
  ],
  declarations: [
    TopNavComp, RInputD
  ]
})
export class InfraModule { }
