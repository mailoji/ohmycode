import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Modelo/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  numberRegEx = /^[1-9][0-9]*$/;

  creacionForm = this.fb.group({
    id: ['', [Validators.pattern(this.numberRegEx), Validators.required]],
    title: ['', [Validators.maxLength(200), Validators.required]],
    completed: ['', Validators.required],
  });
  todo: Todo = new Todo();
  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.Editar();
  }

  sumbit() {
    console.log('Form ' + JSON.stringify(this.creacionForm.value));
  }
  Editar() {
    let id = JSON.parse(localStorage.getItem('id') || '{}');
    this.service.getTodoId(+id).subscribe((data) => {
      this.todo = data;
    });
  }

  actualizar(todo: Todo) {
    this.service.updatedTodo(todo).subscribe((data) => {
      this.todo = data;
      Swal.fire('Actualizado correctamente!', 'success');
      this.router.navigate(['']);
    });
  }
}
