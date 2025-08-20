import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nosotros', component: AboutComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];