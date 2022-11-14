import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor() { }

  

  logout(){
    localStorage.removeItem('user_token')
    sessionStorage.removeItem('user_session')
  }
}
