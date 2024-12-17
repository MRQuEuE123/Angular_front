import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Greeting } from './greeting'
import { GreetingService } from './services/greeting.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  imports: [HttpClientModule,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  standalone:true,
  styleUrl: './app.component.css',
  providers: [GreetingService]
})
export class AppComponent {
  public greet: Greeting|undefined;
  title="работает";
  public num1: number | undefined;
  public num2: number | undefined;
  public num3: number | undefined;
  public resultMessage: string = "Waiting for result...";
  constructor(private greetingService: GreetingService){}

 

  public getGreeting(content: string):void{
    this.greetingService.getGreeting(content).subscribe(
      (response: Greeting)=>{
      this.greet=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public calculateResult(): void {
    if (this.num1 === undefined || this.num2 === undefined || this.num3 === undefined) {
      this.resultMessage = "Ничего не задано";
      return;
    }

    const content = `${this.num1} ${this.num2} ${this.num3}`;
    this.greetingService.getGreeting(content).subscribe(
      (response: Greeting) => {
        this.resultMessage = `Result: ${response.content}`;
      },
      (error: HttpErrorResponse) => {
        this.resultMessage = `Error: ${error.message}`;
      }
    );
  }


}
