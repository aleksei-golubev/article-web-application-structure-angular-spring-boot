import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserProfile } from './model/user-profile';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'User profile';

  userProfile?: UserProfile;

  constructor(private userService: UserService) {
    userService.getUserProfile().subscribe(userProfile => this.userProfile = userProfile);
  }
}
