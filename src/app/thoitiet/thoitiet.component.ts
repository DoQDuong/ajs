import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'weather',
  templateUrl:'./thoitiet.component.html'
})
export class ThoitietComponent{
  city : string = '';
  temp : number = 0;
  hump : number = 0;
  press : number = 0;

  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.hanoi();
    this.ny();
    this.tphcm();
    this.bl();
    this.tk();
    this.london();
}
  hanoi(){
    //lay ttin nhiet do thoi tiet hnoi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }

  tphcm(){
    //lay ttin nhiet do thoi tiet hnoi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }

  london(){
    //lay ttin nhiet do thoi tiet hnoi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }

  ny(){
    //lay ttin nhiet do thoi tiet hnoi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Newyorki&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }

  tk(){
    //lay ttin nhiet do thoi tiet hnoi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  bl(){
    //lay ttin nhiet do thoi tiet hnoi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
}

