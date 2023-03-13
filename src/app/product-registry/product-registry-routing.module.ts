import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductRegistryComponent } from './product-registry.component';

const routes: Routes = [{ path: '', component: ProductRegistryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRegistryRoutingModule {}
