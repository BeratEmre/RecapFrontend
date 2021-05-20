import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  navitemId=0
  constructor(private router:Router,private toastr:ToastrService) {  
   }

  navlink:number
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
    this.navitemId=0  
    this.toastr.error("Çıkış Yaptınız.")
    this.router.navigate(["login"])
    
  }

  inLogin(){
    if (localStorage.getItem("token")&&localStorage.getItem("kullaniciAdi") ) {
      this.getKullaniciAdi()
      return true
    }
    return false
  }

  setCurrentItem(id:any){
    this.navitemId=id
  }

  getCurrentClass(id:number)
  {
    if ( this.navitemId==id) {
      return "nav-link active"
    }
    return "nav-link"   
  }  
}
