package demo.application.backend;

import java.time.LocalDate;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/profile")
    public UserProfile getUser() {

        UserProfile userProfile = new UserProfile();

        userProfile.setFirstName("Juan");
        userProfile.setLastName("Gonzalez");
        userProfile.setDateOfBirth(LocalDate.parse("1988-09-24"));

        return userProfile;
    }
    
}
