import {HttpClient} from './http-client';
import { IpApiResponse } from '../model/ipapi-response';

export class IpApiClient extends HttpClient {
  public constructor() {
    super("http://ip-api.com");
  };

  public getCurrentLocation = async() => this.instance.get<IpApiResponse>("/json").then(r=>r);
};