import { HttpHeaders } from "@angular/common/http";

export class ClientConfiguration {
       public headers: HttpHeaders = new HttpHeaders({
       });
}

export class BaseClass {
       public constructor(configuration: ClientConfiguration) {
              configuration.headers = new HttpHeaders({
                     "Access-Control-Allow-Origin": "*"
              })
       }

       public getDefaultHeaders(){

       }
}