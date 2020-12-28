import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:String ='Random Jokes From Chuck Norris API ';

  chuckJoke = ""

  constructor(private appService:AppService){

  }

  async getJokes(){
    try {
      const joke:any = await this.appService.getJokes()

      const jokeValue = joke.value;

      this.chuckJoke = jokeValue;

      console.log(joke);
    } catch (error) {
      console.log(`[ERROR] ==> AppComponent ==> getJokes ==>`,error);
      alert('Failed');
    }

  }
}
