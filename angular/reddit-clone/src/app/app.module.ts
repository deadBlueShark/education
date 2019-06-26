import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { RedditComponent } from './reddit/reddit.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    RedditComponent,
    InventoryComponent,
    ProductListComponent,
    ProductComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductDisplayComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
