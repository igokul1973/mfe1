import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRegistryRoutingModule } from './product-registry-routing.module';
import { ProductRegistryComponent } from './product-registry.component';


@NgModule({
  declarations: [
    ProductRegistryComponent
  ],
  imports: [
    CommonModule,
    ProductRegistryRoutingModule
  ]
})
export class ProductRegistryModule { }
