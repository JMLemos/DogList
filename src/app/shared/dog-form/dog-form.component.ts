import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Dog from 'src/app/models/Dog';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent {
  @Input() newDog: Dog = new Dog('');
  @Input() requestType: string = 'post';

  dogForm?: FormGroup;

  constructor(private dogService: DogService, public router: Router) {}

  ngOnInit(): void {
    this.dogForm = new FormGroup({
      name: new FormControl(this.newDog.name),
      breed: new FormControl(this.newDog.breed),
      age: new FormControl(this.newDog.age, [
        Validators.required,
        Validators.min(1)
      ]),
      gender: new FormControl(this.newDog.gender),
      imgURL: new FormControl(this.newDog.imgURL),
    });
  }

  onSubmitForm() {
    this.dogForm?.patchValue({
      name: this.dogForm?.controls['name'].value,
      breed: this.dogForm?.controls['breed'].value,
      age: this.dogForm?.controls['age'].value,
      gender: this.dogForm?.controls['gender'].value,
      imgURL: this.dogForm?.controls['imgURL'].value
    })

    this.newDog = {id: this.newDog.id, ...this.dogForm?.value};

    if (this.requestType === 'post') {
      this.dogService.createDog(this.newDog);
      alert('Cachorro adicionado com sucesso!');
    }
    else {
      this.dogService.updateDog(this.newDog.id, this.newDog);
      alert('Cachorro atualizado com sucesso!');
    }

    this.router.navigate(['home']);
  }
}
