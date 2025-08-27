import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { ProductDetailComponent } from '../product-detail/product-detail'; // Importa el componente de detalle

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ProductDetailComponent], // Añade ProductDetailComponent
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  
  allProducts: any[] = [];
  filteredProducts: any[] = [];
  
  categorias = ['Línea Blanda','Movilidad', 'Órtesis', 'Plantillas', 'Prótesis', 'Ver Todo'];
  partesCuerpo = ['Superior', 'Inferior', 'Lumbar', 'Ver Todo'];
  
  selectedCategory: string = 'Ver Todo';
  selectedParteCuerpo: string = 'Ver Todo';

  // Variables para el modal
  isModalOpen = false;
  selectedProduct: any = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.allProducts = data;
      this.route.queryParams.subscribe(params => {
        this.selectedCategory = params['categoria'] || 'Ver Todo';
        this.selectedParteCuerpo = params['parteCuerpo'] || 'Ver Todo';
        this.applyFilters();
      });
    });
  }

  onFilterChange(): void {
    const queryParams: any = {};
    if (this.selectedCategory && this.selectedCategory !== 'Ver Todo') {
      queryParams.categoria = this.selectedCategory;
    }
    if (this.selectedParteCuerpo && this.selectedParteCuerpo !== 'Ver Todo') {
      queryParams.parteCuerpo = this.selectedParteCuerpo;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams
    });
  }

  applyFilters(): void {
    let products = [...this.allProducts];
    if (this.selectedCategory && this.selectedCategory !== 'Ver Todo') {
      products = products.filter(p => p.categoria === this.selectedCategory);
    }
    if (this.selectedParteCuerpo && this.selectedParteCuerpo !== 'Ver Todo') {
      products = products.filter(p => p.parteCuerpo === this.selectedParteCuerpo);
    }
    this.filteredProducts = products;
  }

  // Funciones para el modal
  openProductModal(product: any): void {
    this.selectedProduct = product;
    this.isModalOpen = true;
  }

  closeProductModal(): void {
    this.isModalOpen = false;
    this.selectedProduct = null;
  }
}