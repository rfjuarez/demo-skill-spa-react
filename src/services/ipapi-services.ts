import {HttpClient} from './http-client';
import {IpApiResponse} from '../model/ipapi-response';

export interface IpApiClient {
    getCurrentLocation: () => Promise<IpApiResponse>;
}

export class IpApiClientImpl extends HttpClient implements IpApiClient {
    public constructor() {
        super("http://ip-api.com");
    };

    public getCurrentLocation = async () => this.instance.get<IpApiResponse>("/json");
}