import {Auto} from './Auto';
import {Client} from './client';

export class Order {

  public id: number;
  public auto: Auto;
  public client: Client;
  public date: string;
}
