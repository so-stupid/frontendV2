import {Auto} from './Auto';
import {Client} from './client';

export class Orders {

  public id: number;
  public auto: Auto;
  public client: Client;
  public worker: Worker;
  public date: string;
}
