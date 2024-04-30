import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  
  private readonly userService = inject(UserService);

  users: any[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(user => {
      this.users = user;
    })
  }
}
