import {Component} from "@angular/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  // template:`<h1>Navbar Component</h1>
  //           <p>navbar paragraph</p>`,
  // styles: `h1 {
  //          color: red;
  //          }`,
  templateUrl: './navbar.component.html',
  styleUrl:"./navbar.component.css",
})

export class AppNavbar{}
