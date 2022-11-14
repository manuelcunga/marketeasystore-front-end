import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';

  constructor(private toast: NgToastService){}


  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message'});
  }
  
  showError() {
    this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true});
  }

  showInfo() {
    this.toast.info({detail:"INFO",summary:'Your Info Message',sticky:true});
  }

  showWarn() {
    this.toast.warning({detail:"WARN",summary:'Your Warn Message'});
  }
}
