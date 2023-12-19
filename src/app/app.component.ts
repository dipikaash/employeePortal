import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeePortal';
  user?: User | null;

  constructor(private authenticationService: AuthenticationService) {
      this.authenticationService.user.subscribe(x => {
        console.log(this.user);
        this.user = x
      }
        );
  }

  logout() {
      this.authenticationService.logout();
  }
}
