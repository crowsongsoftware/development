import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class ConfigService {
  
    private configuration: ApplicationConfig;
  
    constructor( private httpClient: HttpClient) { };
  
    setConfig(): Promise<AppConfig> {
      return this.httpClient
        .get<AppConfig>('./app-config.json')
        .toPromise()
        .then(config => this.configuration = config);
    }
  
    readConfig(): AppConfig {
      return this.configuration;
    }
  }