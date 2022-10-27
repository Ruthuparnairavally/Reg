import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  topics = ['Angular', 'React', 'Java', 'Python'];

  userModel = new User('', 'rob@gmail.com', 1234567890, 'default', 'morning', true);

  topicHasError= true;

  validateTopic(value:string){
   if(value === 'default')
   {
    this.topicHasError= true;
   }
   else
   {
    this.topicHasError= false;
   }
  }
}
