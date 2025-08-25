import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];