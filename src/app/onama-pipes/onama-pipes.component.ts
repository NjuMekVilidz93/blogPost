import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onama-pipes',
  templateUrl: './onama-pipes.component.html',
  styleUrls: ['./onama-pipes.component.css'],
  template:
  
  `
  {{ onama.title | uppercase }} <br/> <br/>
  {{ onama.titlee }} <br/> <br/>
  {{ onama.titleee }} <br/> <br/>
  
  `
})
export class OnamaPipesComponent  {

     //pipes
 onama = {
  title: 'O nama',
  titlee: 'Grafički dizajneri, kao stvaraoci grafičkih proizvoda i komunikacija se osposobljavaju za kreativni stvaralački rad u dizajniranju svih grafičkih proizvoda i komunikacija. ',
  titleee: 'Veštine i osobine koje bi trebalo da ima grafički dizajner: Kreativnost, Razvijena sposobnost estetske procene, Postojan smisao za tehničke probleme i prostorne odnose, Preciznost u radu, Spretnost ruku i prstiju, Sklonost ka umetnosti i dobrom crtanju, Komunikativnost, Poznavanje računarskih programa u oblasti dizajna.'
 }

}
