import { Component, Input } from "@angular/core";
import { UserProfile } from "./model/user-profile";

@Component({
    selector: 'profile',
    template: `
        <pre>
First name:     {{profile?.firstName}}
Last name:      {{profile?.lastName}}
Date of Birth:  {{profile?.dateOfBirth | date}}     
        </pre>
    `
})
export class ProfileComponent {
    @Input()
    profile?: UserProfile
}