import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  producto?: Producto[];
  currentProducto: Producto = {};
  currentIndex = -1;
  nombre = '';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;

  constructor(
    private productoService: ProductoService,
    private storageService: StorageService
    ) { }

  ngOnInit(): void {
    this.recuperarProductos();

    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    }
  }
  recuperarProductos(): void {
    this.productoService.getAll()
      .subscribe({
        next: (data) => {
          this.producto = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refrescarLista(): void {
    this.recuperarProductos();
    this.currentProducto = {};
    this.currentIndex = -1;
  }
  setProductoActivo(tutorial: Producto, index: number): void {
    this.currentProducto = tutorial;
    this.currentIndex = index;
  }
  removerAllProductos(): void {
    this.productoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refrescarLista();
        },
        error: (e) => console.error(e)
      });
  }
  buscarNombre(): void {
    this.currentProducto = {};
    this.currentIndex = -1;

    this.productoService.findByNombre(this.nombre)
      .subscribe({
        next: (data) => {
          this.producto = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
