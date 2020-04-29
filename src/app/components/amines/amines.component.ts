import { Component, OnInit } from '@angular/core';
import { AminesService } from '../../services/amines.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-amines',
  templateUrl: './amines.component.html',
  styleUrls: ['./amines.component.css']
})
export class AminesComponent implements OnInit {

  amines: any[] = [];

  constructor( private amineService: AminesService, private router: Router) {
   }

  ngOnInit(): void {
    this.amines = this.amineService.getAmines();
    console.log(this.amines);
  }

  verAmine(idx: number){
    this.router.navigate(['/amine', idx]);
  }
}
