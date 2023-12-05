import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TdtemplateComponent } from './components/tdtemplate/tdtemplate.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
const route: Route[] = [
  {
    path: '',
    component: TdtemplateComponent,
  },
  {
    path: 'reactive',
    component: ReactiveComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    TdtemplateComponent,
    NavbarComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
