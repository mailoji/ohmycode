import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Modelo/Todo';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  todos!: Todo[];
  public lista: any = [];

  filterUser = '';

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.cargarLista();

    this.service.getTodo().subscribe((data) => {
      this.todos = data;
    });
  }
  Editar(todo: Todo): void {
    localStorage.setItem('id', todo.id.toString());
    this.router.navigate(['edit']);
  }
  Delete(todo: Todo) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This operation cannot be undone',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteTodo(todo).subscribe((data) => {
          this.todos = this.todos.filter((t) => t !== todo);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        });
      }
    });
  }

  public cargarLista() {
    this.service
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .subscribe((response) => {
        this.lista = response;
      });
  }

  public listaFiltrada(userId: string) {
    if (userId != '') {
      this.service
        .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .subscribe((response) => {
          this.lista = response;
        });
    } else {
      this.cargarLista();
    }
  }
}
