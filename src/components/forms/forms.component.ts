import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forms',
  styleUrl: './forms.component.scss',
  templateUrl: './forms.component.html',
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {
  public formDefault = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  private readonly fb = inject(FormBuilder).nonNullable;

  public options = ['Angular', 'Swelte', 'React', 'Vue'];

  public formFromBuilder = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.pattern(/^(?:\+7|8)?9\d{9}$/)]],
    framework: [this.options[0]],
  });

  public isInvalid(
    controlName: keyof typeof this.formDefault.controls,
  ): boolean {
    const control = this.formDefault.controls[controlName];
    return control.invalid && control.touched && control.dirty;
  }

  public onSubmitForm1() {
    const payload = this.formDefault.getRawValue();
    console.log('onSubmit1', payload);
  }
  public onSubmitForm2() {
    const payload = this.formFromBuilder.getRawValue();
    console.log('onSubmit2', payload);
  }
}

// Программное управление состояниями
// markAsTouched()
// markAsUntouched()
// markAsDirty()
// markAsPristine()
// setErrors()
// updateValueAndValidity()
// reset()
// disable()
// enable()
