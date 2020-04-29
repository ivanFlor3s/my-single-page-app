import { Component, OnInit } from '@angular/core';
import { AminesService } from '../../services/amines.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  animeArray: any[] = [];
  constructor(private amineService: AminesService, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.animeArray = this.amineService.buscarAmines(params['term']);
      console.log(this.animeArray);
    });
  }

}
