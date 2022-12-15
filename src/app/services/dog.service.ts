import { Injectable } from '@angular/core';
import Dog from '../models/Dog';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  dogList: Dog[];
  private dogs: Dog[] =[
    {
      id: 1,
      name: 'Mel',
      age: 6,
      breed: 'SRD',
      gender: 'F',
      imgURL: 'https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg'

    },
    {
      id: 2,
      name: 'Spike',
      age: 5,
      breed: 'Bulldog',
      gender: 'M',
      imgURL: 'https://www.dogvibe.com.br/blog/wp-content/uploads/2021/06/guia_racas_buldogue_frances.jpg'

    },
    {
      id: 3,
      name: 'Meg',
      age: 2,
      breed: 'Golden',
      gender: 'F',
      imgURL: 'https://www.maxtotalalimentos.com.br/img/seo/9/386/cachorro-sorrindo-saiba-ler-as-expressoes-faciais-do-seu-cao.jpg'

    },
    {
      id: 4,
      name: 'Nino',
      age: 1,
      breed: 'SRD',
      gender: 'M',
      imgURL: 'https://petepop.ig.com.br/wp-content/uploads/2020/12/david-clarke-0h3Emf2YLKg-unsplash.jpg'

    },
    {
      id: 5,
      name: 'Mayke',
      age: 8,
      breed: 'Beagle',
      gender: 'M',
      imgURL: 'https://www.petz.com.br/blog/wp-content/uploads/2020/06/cao-europeu.jpg'

    },
  ];

  constructor() { 
    if (!localStorage.getItem('dogs')) {
      localStorage.setItem('dogs', JSON.stringify(this.dogs));
    }

    this.dogList = JSON.parse(localStorage.getItem('dogs')!);
  }

  getDogs(): Dog[] {
    return this.dogList;
  }

  createDog(newDog: Dog) {
    this.dogList.push(newDog);

    localStorage.setItem('dogs', JSON.stringify(this.dogList));
  }

  updateDog(id: number, updatedDog: Dog) {
    const index = this.dogList.findIndex((dog: Dog)=> dog.id == id);
    if (index == -1) return;
    this.dogList[index] = updatedDog;

    localStorage.setItem('dogs', JSON.stringify(this.dogList));
  }

  deleteDog(id: number) {
    const index = this.dogList.findIndex((dog: Dog)=> dog.id == id);
    if (index == -1) return;
    this.dogList.splice(index, 1);

    localStorage.setItem('dogs', JSON.stringify(this.dogList));
  }
}
