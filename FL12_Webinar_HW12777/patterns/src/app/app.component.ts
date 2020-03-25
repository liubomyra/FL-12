import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { } from '../assets/epms.json'
export interface Employees {
  id?: number;
  rm_id?: number;
  name: string;
  performance: string;
  last_vacation_date?: string;
  salary: number;
  pool_name: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  employe: Employees[] = [];

  toggle: any = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Employees[]>("https://roman4ak.github.io/fe-oop-lab/mocks/epms.json")
      .subscribe(employe => {
        console.log("Response", employe);
        this.employe = employe;
      });
  }
}
