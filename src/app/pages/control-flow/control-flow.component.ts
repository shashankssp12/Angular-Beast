import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [NgIf, NgFor],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
    isVisible: boolean = true;
    isTextVisible = signal<boolean>(true);

    cityList: string[]= ["Agra","Hyderabad","Delhi","Mumbai"];  
    // setting value in variable and in signal
    // constructor(){
    //   setTimeout(()=>{
    //   this.isVisible = false;
    //   //signal
    //   this.isTextVisible.set(false);
    //   },5000);
    // }

    showText(){
      this.isTextVisible.set(true);
    }
    hideText(){
      this.isTextVisible.set(false);
    }

}
