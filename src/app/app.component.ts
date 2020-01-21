import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  classNumber = 1;
  classTitle = 'Números Primos';

  pages = [
     {
      id: 0,
      title: 'E0',
      info: 'Ejercicio #0',
      link: 'e0'
    },
    {
      id: 1,
      title: 'E1',
      info: 'Ejercicio #1',
      link: 'e1'
    },
    {
      id: 2,
      title: 'E2',
      info: 'Ejercicio #2',
      link: 'e2'
    },
    {
      id: 3,
      title: 'E3',
      info: 'Ejercicio #3',
      link: 'e3'
    },
    {
      id: 4,
      title: 'E4',
      info: 'Ejercicio #4',
      link: 'e4'
    },
    {
      id: 5,
      title: 'E5',
      info: 'Ejercicio #5',
      link: 'e5'
    },
    {
      id: 6,
      title: 'E6',
      info: 'Ejercicio #6',
      link: 'e6'
    },
  ]
}
