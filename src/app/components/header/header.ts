import { Component, ElementRef, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // Asegúrate de que RouterModule esté aquí
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  isDropdownOpen = false;

 categories = [
    { name: 'Línea Blanda', value: 'Línea Blanda' },
    { name: 'Movilidad', value: 'Movilidad' },
    { name: 'Ortesis', value: 'Órtesis' },
    { name: 'Plantillas', value: 'Plantillas' },
    { name: 'Prótesis', value: 'Prótesis' },
    { name: 'Ver Todo', value: 'Ver Todo' }
  ];

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}