import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public myForm: FormGroup;

  get formDisabled(): boolean {
    return this.myForm.invalid || this.myForm.pristine;
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      userFirstName: new FormControl('', Validators.required),
      userLastName: new FormControl('', Validators.required),
      userEmail: new FormControl ('', [Validators.required, Validators.email])
    });
  }

  private handleSubmit() {
    this.userService.subj.next(this.myForm.value);
  }

}
