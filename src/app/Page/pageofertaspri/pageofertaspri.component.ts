import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageofertaspri',
  templateUrl: './pageofertaspri.component.html',
  styleUrl: './pageofertaspri.component.css'
})
export class PageofertaspriComponent implements OnInit {

  images: string[] = [
    'assets/imagen1.jpg',
    'assets/imagen2.jpg',
    'assets/imagen3.jpg'
    // Añade más rutas de imágenes según sea necesario
  ];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void { }

  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
