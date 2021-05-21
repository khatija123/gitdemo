import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email : string;
  subject : string;
  message : string;
  constructor() { }

  ngOnInit() {
  }
  
  processForm() {
    const allInfo = `Your subject is: ${this.subject}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  } 
 
}



