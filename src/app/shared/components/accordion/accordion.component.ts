import { Component, Input, OnInit } from '@angular/core';
import { UaserNameI, UserI } from '../../interfaces/user.interface';
import { UnknownI } from '../../interfaces/unknown.interface';
import { UnknownService } from '../../services/unknown/unknown.service';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent implements OnInit {

  @Input() set users(users) {
    this.userDetails = users
  }

  @Input() set unknown(unknown) {
    this.unknownDetails = unknown
  }

  public userDetails: UserI[]
  public unknownDetails: UnknownI[]
  public showChangesField: boolean

  public userForm: FormGroup
  public unknownForm: FormGroup

  public panelOpenState = false;

  readonly maxDate = new Date()

  constructor(private unknownService: UnknownService, private userService: UserService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.initForms()
  }

  private initForms() {
    this.userForm = this.fb.group({
      avatar: [null],
      email: [null, [Validators.email, Validators.required]],
      first_name: [null, [Validators.required]],
      id: [null],
      last_name: [null, [Validators.required]]
    })
    this.unknownForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      year: [null, [Validators.required, Validators.min(1930), Validators.max(this.maxDate.getFullYear())]],
      color: [null, [Validators.required]],
      pantone_value: [null, [Validators.required]]
    })
  }

  public onOpenUserPanel(user: UserI) {
    const {avatar, email, first_name, id, last_name} = user;
    this.userForm.get('email')?.setValue(email)
    this.userForm.get('first_name')?.setValue(first_name)
    this.userForm.get('id')?.setValue(id)
    this.userForm.get('last_name')?.setValue(last_name)
    this.userForm.get('avatar')?.setValue(avatar)
  }

  public onOpenUnknownPanel(unknown) {
    const {id, name, year, color, pantone_value} = unknown;
    this.unknownForm.get('id')?.setValue(id)
    this.unknownForm.get('name')?.setValue(name)
    this.unknownForm.get('year')?.setValue(year)
    this.unknownForm.get('color')?.setValue(color)
    this.unknownForm.get('pantone_value')?.setValue(pantone_value)
  }

  public onRemoveUnknown(id) {
    this.unknownService.removeUnknown(id).subscribe(() => {
      localStorage.setItem('unknownId', JSON.stringify(id));
      this.unknownDetails = this.unknownDetails.filter(unknown => unknown.id !== JSON.parse(localStorage.getItem('unknownId') as string))
    })
  }

  public onRemoveUser(id) {
    this.userService.removeUser(id).subscribe(() => {
      localStorage.setItem('userId', JSON.stringify(id));
      this.userDetails = this.userDetails.filter(user => user.id !== JSON.parse(localStorage.getItem('userId') as string))
    })
  }

  public onSubmitUserForm(id) {
    if (id === this.userForm.get('id')?.value) {
      const data = {
        id: this.userForm.get('id')?.value,
        first_name: this.userForm.get('first_name')?.value,
        last_name: this.userForm.get('last_name')?.value,
        email: this.userForm.get('email')?.value
      }
      this.userService.changeUserData(data).subscribe(res => {
        this.userDetails.forEach(el => {
          if (el.id === res.id) {
            const {email, first_name, last_name} = res
            el.email = email
            el.first_name = first_name
            el.last_name = last_name
          }
        })
      })
    }
  }

  public onSubmitunknownForm(id) {
    if (id === this.unknownForm.get('id')?.value) {
      const data = {
        id: this.unknownForm.get('id')?.value,
        name: this.unknownForm.get('name')?.value,
        year: this.unknownForm.get('year')?.value,
        color: this.unknownForm.get('color')?.value,
        pantone_value: this.unknownForm.get('pantone_value')?.value
      }
      this.unknownService.changeUnknownData(data).subscribe(res => {
        this.unknownDetails.forEach(el => {
          if (el.id === res.id) {
            const {name, year, color, pantone_value} = res
            el.name = name
            el.year = year
            el.color = color
            el.pantone_value = pantone_value
          }
        })
      })
    }
  }
}
