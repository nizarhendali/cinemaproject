import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit{
 
  constructor(private router:Router,
    private route: ActivatedRoute){

  }
  
  ngOnInit(): void {
    
    
    
  }



  

}
