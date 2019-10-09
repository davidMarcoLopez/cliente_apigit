import { Component } from '@angular/core';
import { IssuesService } from './issues.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clienteGit'
  urlGit: string = ''
  issues: object[] = []
  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5,10,20]

  constructor (public issuesRepo: IssuesService){}

  getIssuesFromUrl(){
    //concatena /issues para obtener desde la url del repo las issues
    this.issuesRepo.getIssues(`${this.urlGit}/issues`).subscribe((response: any) => {
      this.issues = response
      console.log(this.issues)
    })
  }

  //funcion para cambiar numero de issues a listar
  handlePage(e: PageEvent){
      this.page_size = e.pageSize
      this.page_number = e.pageIndex+1
  }
}

