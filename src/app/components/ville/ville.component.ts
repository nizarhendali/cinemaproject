import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/common/ville';
import { CinemaServiceService } from 'src/app/service/cinema-service.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css'],
})

export class VilleComponent implements OnInit {

  villes!: Ville[];

  selectedVille!: number;

  constructor(private cinemaservice:CinemaServiceService,
    private router: Router){

  }  
  ngOnInit() {
    
     this.getvilles();
     
  }

getvilles(){
  this.cinemaservice.getVilles().subscribe(data =>{
    this.villes= data._embedded.villes;

  })

}



sendId() {
  this.router.navigateByUrl(`cinemaid/${this.selectedVille}`);
  }


}
