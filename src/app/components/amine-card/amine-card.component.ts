import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amine-card',
  templateUrl: './amine-card.component.html',
  styleUrls: ['./amine-card.component.css']
})
export class AmineCardComponent implements OnInit {

  @Input() amine: any = {};
  @Input() index: number;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  verAmine(){
    this.router.navigate(['/amine',this.index]);
  }

}
