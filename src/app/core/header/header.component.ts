import { DataStorageService } from '../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/auth/auth.reducers';
import * as AuthActions from '../../auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<State>;
  constructor(private dataStorageService: DataStorageService, private store: Store<AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response) => console.log(response)
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogOut() {
    this.store.dispatch(new AuthActions.LogOut());
  }

}
