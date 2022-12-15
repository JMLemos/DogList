import { DogService } from 'src/app/services/dog.service';
import { Component } from '@angular/core';
import Dog from 'src/app/models/Dog'

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {
  dogList: Dog[];

  constructor(dogService: DogService) {
    this.dogList = dogService.getDogs();
  }
}
