import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from './/app-routing.module';
import { RedditComponent } from './reddit/reddit.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

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
    ProductDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
