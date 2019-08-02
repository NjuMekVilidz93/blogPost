import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt-forma',
  templateUrl: './kontakt-forma.component.html',
  styleUrls: ['./kontakt-forma.component.css']
})
export class KontaktFormaComponent {

  log(x){
    console.log(x);
  }
  onSave($event){
    console.log("Poslato",$event);
  }

   //property-binding
 kontakt_ikonica = 'icon-envelope-o';
 kontakt_info = 'nikola.vulovic.28.15@ict.edu.rs';

 lokacija_ikonica = 'icon-map-o';
 lokacija_info = 'Cacak';

 telefon_ikonica = 'icon-phone';
 telefon_info = '065-123-223';


}
