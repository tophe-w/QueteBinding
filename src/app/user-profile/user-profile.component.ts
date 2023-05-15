import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  
  user:User = {
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
  constructor() {
    this.user = new User('Bobbie','BoB', 25, 'I am the best', 'https://randomuser.me/api/portraits/lego/2.jpg');
  }
}

export class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;

  constructor(
    name: string,
    firstName: string,
    age: number,
    quote: string,
    photo: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
  }
}

