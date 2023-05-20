import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  hideAge = false;

  toggleAgeVisibility() {
    this.hideAge = !this.hideAge;
  }
  
}

// export class User {
//   name: string;
//   firstName: string;
//   age: number;
//   quote: string;
//   photo: string;

//   constructor(
//     name: string,
//     firstName: string,
//     age: number,
//     quote: string,
//     photo: string
//   ) {
//     this.name = name;
//     this.firstName = firstName;
//     this.age = age;
//     this.quote = quote;
//     this.photo = photo;
//   }
// user1 = new User('bob', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg');
// }


