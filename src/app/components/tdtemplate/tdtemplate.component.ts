import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdtemplate',
  templateUrl: './tdtemplate.component.html',
  styleUrls: ['./tdtemplate.component.scss'],
})
export class TdtemplateComponent implements OnInit {
  user: any = {
    username: '',
    password: '',
  };
  // form!: NgForm;
  constructor() {}
  // bisogna riportare form come ngform per non avere dati presi male, inoltre se non uso il form e faccio semplicemente
  // un biding che si stampa poi sull'oggetto , questo avrà valore solo locale non sul server
  submit(form: NgForm) {
    this.user.username = form.value.userInfo.username;
    this.user.password = form.value.userInfo.password;
    // console.log('Form inviato: ', this.form);
    console.log('Form inviato: ', this.user);
  }

  ngOnInit(): void {}
}
