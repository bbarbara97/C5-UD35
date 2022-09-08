import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C5-UD35';

  datos: Array<object> = [];

  public userForm:FormGroup;
  name: string = "";
  cif: string = "";
  direccion: string = "";
  grupo: string = "";



  constructor( private fb: FormBuilder) {
    // Form element defined below
    this.userForm = this.fb.group({
      name: '',
      cif: '',
      direccion: '',
      grupo: ''
    });
  }
  setValue() {
    this.name=this.userForm.get('name')?.value; // input value retrieved
    this.cif=this.userForm.get('cif')?.value;
    this.direccion=this.userForm.get('direccion')?.value;
    this.grupo= this.userForm.get('grupo')?.value;

    this.datos.push({name: this.name, cif: this.cif, direccion: this.direccion, grupo: this.grupo})
  }
}
