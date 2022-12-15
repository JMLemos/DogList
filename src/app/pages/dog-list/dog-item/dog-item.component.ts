import { DialogComponent } from './../../../shared/dialog/dialog.component';
import { DogService } from 'src/app/services/dog.service';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Dog from 'src/app/models/Dog';



@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.css']
})
export class DogItemComponent {

  @Input() dogItem: Dog = new Dog('');

  constructor(private dialog: MatDialog, private dogService: DogService){

  }
  
  showAlert(msg: string){
    alert(msg)
  }

  editDog(){

    this.dialog.open(DialogComponent, {data:{title:"atualizar cachorro", dog: this.dogItem}}); 

  }

  deleteDog(){

    this.dogService.deleteDog(this.dogItem.id)

  }
}


