import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  form!: FormGroup;
  generi = ['uomo', 'donna'];
  constructor(private fb: FormBuilder) {}
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  ngOnInit(): void {
    this.form = this.fb.group({
      userInfo: this.fb.group({
        Nome: this.fb.control(null, {
          validators: [Validators.required],
        }),
        Cognome: this.fb.control(null, [Validators.required]),
        username: this.fb.control(''),
      }),
      secret: this.fb.group({
        password: this.fb.control(''),
        rifai: this.fb.control(null, {
          validators: [Validators.required],
        }),
      }),
      genere: this.fb.control('donna'),
      profilo: this.fb.control(''),
      biografia: this.fb.control(''),
    });
  }

  Submit() {
    // console.log(this.profileForm);
    console.log(this.form);
  }
}
