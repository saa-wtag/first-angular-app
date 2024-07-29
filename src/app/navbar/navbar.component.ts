import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[FormsModule],
  // template:`<h1>Navbar Component</h1>
  //           <p>navbar paragraph</p>`,
  // styles: `h1 {
  //          color: red;
  //          }`,
  templateUrl: './navbar.component.html',
  styleUrl:"./navbar.component.css",
})

export class AppNavbar{
  username:string="Sayem Ahmed";

  wowButton(){
    console.log("Wow Button");
  }
  hoverButton(){
    console.log("Hover Button");
  }
  keyEntry(event:any){
    console.log(event.keyCode);
  }
}
