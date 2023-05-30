import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: UserI[] = [];

  public panelOpenState = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => this.users = res.data)
  }
}
