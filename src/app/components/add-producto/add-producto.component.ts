import { Component} from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {

  producto: Producto = {
    nombre: '',
    pcompra: '',
    pventa: '',
    stock: '',
    detalle: '',
    imagen:'',
    estado: false
  };
  submitted = false;

  constructor(private productoService:ProductoService) { }

  saveProducto(): void {
    const data = {
      nombre: this.producto.nombre,
      pcompra: this.producto.pcompra,
      pventa: this.producto.pventa,
      stock: this.producto.stock,
      detalle: this.producto.detalle,
      imagen: this.producto.imagen,

    };
    this.productoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newProducto(): void {
    this.submitted = false;
    this.producto = {
      nombre: '',
      pcompra: '',
      pventa: '',
      stock: '',
      detalle: '',
      imagen:'',
      estado: false
    };
  }

}
