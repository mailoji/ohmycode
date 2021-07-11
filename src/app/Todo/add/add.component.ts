import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Modelo/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  numberRegEx = /^[1-9][0-9]*$/;

  creacionForm = this.fb.group({
    userId: ['', [Validators.pattern(this.numberRegEx), Validators.required]],
    title: ['', [Validators.maxLength(200), Validators.required]],
    completed: ['', Validators.required],
  });
  todo: Todo = new Todo();
  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  sumbit() {
    console.log('Form ' + JSON.stringify(this.creacionForm.value));
  }
  guardar(todo: Todo) {
    this.service.createTodo(todo).subscribe((data) => {
      Swal.fire('Todo añadido!', 'success');
      this.router.navigate(['']);
      this.todo = data;
    });
  }
}
