import { Component } from '@angular/core';
import Dog from 'src/app/models/Dog'

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {
  dogList: Dog[] =[
    {
      name: 'Mel',
      age: 6,
      race: 'SRD',
      gender: 'F',
      imgURL: 'https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg'

    },

    {
      name: 'Spike',
      age: 5,
      race: 'Bulldog',
      gender: 'M',
      imgURL: 'https://www.dogvibe.com.br/blog/wp-content/uploads/2021/06/guia_racas_buldogue_frances.jpg'

    },
    {
      name: 'Meg',
      age: 2,
      race: 'Golden',
      gender: 'F',
      imgURL: 'https://www.maxtotalalimentos.com.br/img/seo/9/386/cachorro-sorrindo-saiba-ler-as-expressoes-faciais-do-seu-cao.jpg'

    },
    {
      name: 'Nino',
      age: 1,
      race: 'SRD',
      gender: 'M',
      imgURL: 'https://petepop.ig.com.br/wp-content/uploads/2020/12/david-clarke-0h3Emf2YLKg-unsplash.jpg'

    },
    {
      name: 'Mayke',
      age: 8,
      race: 'Beagle',
      gender: 'M',
      imgURL: 'https://www.petz.com.br/blog/wp-content/uploads/2020/06/cao-europeu.jpg'

    },

  ];

  

}
