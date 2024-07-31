import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf, NgStyle, NgClass],
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
  isFromNgTemplate:boolean=false;
  users:Array<string>=['one','two','three','four','five','six','seven','eight'];
  isActive:boolean=false;
  isPresent:boolean=true;

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
