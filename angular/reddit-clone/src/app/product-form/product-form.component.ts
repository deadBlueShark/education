import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ProductValidator } from '../validator/product-validator';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  inquiryForm: FormGroup;
  // questionControl: AbstractControl;
  // emailControl: AbstractControl;
  question = '';
  email = '';

  constructor(formBuilder: FormBuilder) {
    this.inquiryForm = formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        ProductValidator.emailFormat
      ])],
      question: ['', Validators.required]
    });

    // this.questionControl = this.inquiryForm.controls['question'];
    // this.emailControl = this.inquiryForm.controls['email'];
  }

  onSubmitInquiry(form: any): void {
    console.log(form);
  }
}
