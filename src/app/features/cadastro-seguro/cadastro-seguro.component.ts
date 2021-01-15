import { SeguroService } from '../../core/services/seguro.service';
import { MarcaCarroService } from '../../core/services/marca-carro.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Seguro } from '../../models/Seguro';
import { MarcaCarro } from '../../models/MarcaCarro';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {

  public seguro = new Seguro();
  public marcasCarro$: Observable<MarcaCarro[]>;

  constructor(
    private marcaCarroService: MarcaCarroService,
    private seguroService: SeguroService
  ) { }

  ngOnInit(): void {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

  salvar(): void {
    this.seguro.id = this.seguro.placaCarro;
    this.seguroService.salvar(this.seguro);
  }

}
