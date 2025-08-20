import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  // Asegúrate de que los imports necesarios estén aquí
  imports: [CommonModule, RouterModule], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  // Variables para guardar un producto de ejemplo de cada categoría
  plantillaExample: any;
  ortesisExample: any;
  protesisExample: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      // Buscamos el primer producto que coincida con cada categoría
      this.plantillaExample = data.find(p => p.categoria === 'Plantillas');
      this.ortesisExample = data.find(p => p.categoria === 'Órtesis');
      this.protesisExample = data.find(p => p.categoria === 'Prótesis');
    });
  }
}