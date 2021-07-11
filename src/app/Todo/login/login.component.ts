import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelo/User';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users!: User[];
  user: User = new User();


  id!: number;
  password: string = '';


  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUser().subscribe((data) => {
      this.users = data;
    });
  }
  guardar(user: User) {
    this.service.createUser(user).subscribe((data) => {
      Swal.fire('User añadido!', 'success');
      this.user = data;
    });
  }
  login() {
    if (this.id == 1) {
      Swal.fire('Welcome', 'success');
    } else {

      
    }
  }
}
