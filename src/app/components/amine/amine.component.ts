import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AminesService } from '../../services/amines.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-amine',
  templateUrl: './amine.component.html',
  styleUrls: ['./amine.component.css']
})
export class AmineComponent implements OnInit {
  amine: any = {};

  constructor(private activeRoute: ActivatedRoute, private aminesService: AminesService, private router: Router) {
    this.activeRoute.params.subscribe( params => {
      // tslint:disable-next-line:no-string-literal
      console.log(params['id']);
      // tslint:disable-next-line:no-string-literal
      this.amine = this.aminesService.getAmine(params['id']);
    });
   }

  ngOnInit( ): void {
    console.log(this.amine);
  }
  volver(){
    this.router.navigate(['/amines']);
  }
}
