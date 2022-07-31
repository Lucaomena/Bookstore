import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { ProductListComponent } from './components/book-cart/product-list/product-list.component';
import { FiltersComponent } from './components/book-cart/filters/filters.component';

import { ProductItemComponent } from './components/book-cart/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import {BooksService} from './components/book-cart/product-list/product-list.service';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { SuporteComponent } from './components/pages/suporte/suporte.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookCartComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent,
    SobreComponent,
    ProdutosComponent,
    SuporteComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
