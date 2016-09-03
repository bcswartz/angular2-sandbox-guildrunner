export class HttpResponse {
  httpStatus: number;
  httpData: any;

  ok: boolean;
  data: any = {};
  errors: string[] = [];

  constructor( response?: any ) {
    this.httpStatus = response.status;
    this.httpData = response.data ? response.data : null;
    this.ok = response.ok ? response.ok : false; //ok is true for all 2xx codes
  }

}
