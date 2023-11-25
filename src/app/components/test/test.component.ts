import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  items!: MenuItem[];

  activeItem!: MenuItem;

    ngOnInit() {
        this.items = [
            { label: 'Cinema Hub', icon: 'pi pi-fw pi-home' },
            { label: 'Home', icon: 'pi pi-fw pi-calendar' }
        ];

        this.activeItem = this.items[0];
    }

    onActiveItemChange(event: MenuItem){
        this.activeItem = event;
    }

    activateLast() {
        this.activeItem = this.items[this.items.length - 1];
    }
}

