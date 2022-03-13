import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'MXN'
  quiero = 'USD'
  total = 0
  monedas: string[] = ['USD', 'MXN', 'EUR']
  constructor() { }

  ngOnInit(): void {
  }
  convertir() {
    switch (this.tengo) {
      case 'MXN':
        if (this.quiero === 'MXN') {
          this.total = this.cantidad /* aqui el usuario selecciona las mismas monedas */
        }
        else if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.044
        }
        else if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.048
        }
        break;
      case 'EUR':
        if (this.quiero === 'EUR') {
          this.total = this.cantidad
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.09
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad * 22.85
        }
        break;
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.92
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad * 20.93
        }
        break
    }
  }

}
