import {Injectable} from '@angular/core';
import {RestService} from "./rest.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../dto/User";
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;

  constructor(private restService: RestService, private http: HttpClient, private kcService: KeycloakService) {
  }

  // TODO Спросить
  /**
   * Передача юзера
   */
  public getUserData(): any {
    return this.kcService.loadUserProfile();
  }

  public usersData(user: User): any {
    const params = {
      user
    };
    return this.restService.doCall('getAllOrderByWorker', params);
  }
}
