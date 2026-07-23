import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
   companyName: string = "Accenture";
   streamName: string = "Angular(Typescript)"
   isEmployee: boolean = true;
   inputType1:string = "radio";
   inputType2 = "checkbox"
    workPreference: string = "";
  //  showAlert(){
  //   alert("This is an alert!");
  //  }
   changeStreamName(name: string){
    this.streamName = name;
   }
   changeCompanyName(name: string){
    this.companyName = name;
   }

   alertCitySelection(cityName: string){
    alert("City Changed to "+cityName);
   }




}



