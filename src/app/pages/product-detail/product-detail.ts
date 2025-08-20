import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent {
  @Input() product: any; 
  @Output() close = new EventEmitter<void>();

  mainImageUrl: string = '';

  // Usamos ngOnChanges para actualizar la imagen principal cuando cambia el producto
  ngOnChanges(): void {
    if (this.product) {
      this.mainImageUrl = this.product.imagenUrl;
    }
  }

  changeMainImage(imageUrl: string): void {
    this.mainImageUrl = imageUrl;
  }

  onClose() {
    this.close.emit();
  }
}