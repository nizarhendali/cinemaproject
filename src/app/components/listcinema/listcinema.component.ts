import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cinema } from 'src/app/common/cinema';
import { Projection } from 'src/app/common/projection';
import { Salle } from 'src/app/common/salle';
import { CinemaServiceService } from 'src/app/service/cinema-service.service';

@Component({
  selector: 'app-listcinema',
  templateUrl: './listcinema.component.html',
  styleUrls: ['./listcinema.component.css']
})
export class ListcinemaComponent implements OnInit{
  idcinema:number=1;
  id= +this.route.snapshot.paramMap.get('id')!;
  cinemas !: Cinema[];
  salles!: Salle[];
  projection!:Array<Projection>;

  constructor(private route:ActivatedRoute,
    private cinemaservice: CinemaServiceService){

  }

  ngOnInit(): void {
    console.log(this.id);
    if(this.id==0){
      this.getlistcinema(1);
    }
    else{
      this.getlistcinema(this.id);
    }

    this.cinemaservice.getsalles(1).subscribe(data =>{
      this.salles=data._embedded.salles;

    })

  }


  getlistcinema(id: number){
   this.cinemaservice.getlistcinema(id).subscribe(data =>{
    this.cinemas=data._embedded.cinemas;
   })

  }

  SendId(id: Number){
  
      this.cinemaservice.getsalles(id).subscribe(data =>{
        this.salles=data._embedded.salles;

  
      });

      this.cinemaservice.getsalles(id).subscribe(data =>{
        data._embedded.salles.forEach(salle=>{

          this.cinemaservice.getProjection(salle.id).subscribe(d=>{
            this.projection=d._embedded.projectionFilms;
           

          })

        });

  
      })

      

    }
   


}
