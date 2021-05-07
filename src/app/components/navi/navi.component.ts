import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor() { }

  kullaniciAdi:string

  ngOnInit(): void {
    this.getKullaniciAdi()
  }

  getKullaniciAdi(){
   this.kullaniciAdi= localStorage.getItem("kullaniciAdi")
  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("kullaniciAdi");
  }

  inLogin(){
    if (localStorage.getItem("token")&&localStorage.getItem("kullaniciAdi") ) {
      return true
    }
    return false
  }

}
