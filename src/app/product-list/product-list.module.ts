// product-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ProductListComponent,
  ],
})
export class ProductListModule { }
