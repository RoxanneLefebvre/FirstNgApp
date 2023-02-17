import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  biere:IBiere;

  constructor(private route:ActivatedRoute, private bieroServ:BieroService){}


  ngOnInit():void {

    this.route.params.subscribe((params)=>{
      this.bieroServ.getUneBiere(params["id"]).subscribe((biere:any)=>{

        this.biere = biere.data;
        
      })
      
    })
  }
  

}
