import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BoutiqueComponent } from './boutique/boutique.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { ScrollDirective } from './shared/scroll.directive';
import { HiddenDirective } from './shared/hidden.directive';
import { ServerService } from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    BoutiqueComponent,
    AccueilComponent,
    ScrollDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [DropdownDirective, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
