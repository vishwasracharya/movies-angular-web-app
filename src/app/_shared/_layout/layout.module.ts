import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { ScriptsInitComponent } from './init/scripts-init/scripts-init.component';
import { Subheader1Component } from './components/subheader/subheader1/subheader1.component';
import { SubheaderWrapperComponent } from './components/subheader/subheader-wrapper/subheader-wrapper.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesRoutingModule } from './page-routing.module';
import { SafeHTMLModule } from '../core/modules/safe-html.module';

import { MatIconModule } from '@angular/material/icon';
import { DirectivesModule } from '../core/directives/directives.module';

@NgModule({
  declarations: [
    AsideComponent,
    HeaderComponent,
    LayoutComponent,  
    ScriptsInitComponent,
    Subheader1Component,
    SubheaderWrapperComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PagesRoutingModule,
    SafeHTMLModule,
    MatIconModule,
    DirectivesModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
