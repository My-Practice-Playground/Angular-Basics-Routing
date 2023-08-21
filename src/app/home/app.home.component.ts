import {Component} from "@angular/core";

@Component({
  selector: 'app-home', templateUrl: './app.home.component.html', styleUrls: ['./app.home.component.scss']
})

export class HomeComponent {
  name = 'Lakshan';
  age = 24;

  image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1920px-Killerwhales_jumping.jpg';
  width = 400;

  printData(data:string){
    console.log(data)
  }
}

