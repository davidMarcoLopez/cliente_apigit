import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
//servicio para peticion de issues de repo a api de github
export class IssuesService{
    constructor (private client: HttpClient){}
    //peticion sin control de errores
    getIssues(url_repo: string){
        return this.client.get(url_repo)
    }
    
}