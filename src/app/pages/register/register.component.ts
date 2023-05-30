import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  public userForm: FormGroup
  regErr: boolean
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.userForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  public onSubmit() {
    this.authService.register(this.userForm.value).subscribe(() => {
      this.router.navigate(['/auth'])
      this.regErr = false
    }, 
    () => {
      this.regErr = true
      setTimeout(() => {
        this.regErr = false
      }, 15000)
    }
    )
  }
}
