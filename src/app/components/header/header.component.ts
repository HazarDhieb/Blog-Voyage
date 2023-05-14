import { Component } from '@angular/core';
import { WeatherService,Location } from 'src/app/services/service/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
city!: Location;
constructor(private weatherService:WeatherService){}
ngOnInit(){
  this.weatherService.getLocation().subscribe((city)=>{
    this.city=city;
  });
}


}
