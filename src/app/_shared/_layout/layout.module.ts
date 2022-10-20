import { LayoutComponent } from './layout.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PagesRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
