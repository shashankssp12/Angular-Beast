import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-dynamic-styling',
  imports: [FormsModule, NgClass,NgStyle],
  templateUrl: './dynamic-styling.component.html',
  styleUrl: './dynamic-styling.component.css'
})
export class DynamicStylingComponent {

  divClassName:string ='bg-success p-4';
  todoStyle: string='pink';
  todoStyle2: string='blue';
}
