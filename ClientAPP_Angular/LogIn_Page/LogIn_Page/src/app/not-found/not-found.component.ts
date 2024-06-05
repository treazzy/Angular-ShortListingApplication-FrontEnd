import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  bgImage(){
    return 'url("https://miro.medium.com/v2/resize:fit:4800/1*9RnAf4QWt9hU7dZYBcTNiw.gif")';
 
  }

}
