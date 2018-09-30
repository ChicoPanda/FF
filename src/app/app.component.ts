import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  click: any = new Audio();
  musica: any = new Audio();

  ngOnInit() {

    this.musica.src = "../../sonidos/musicaInicio.mp3";
    this.musica.currentTime = 2;
    this.click.volume = 0.5;
    this.musica.play()

  }
  sonido() {
    this.click.src = "../../sonidos/hoverClick.mp3";
    this.click.currentTime = 0.6;
    this.click.volume = 0.2;
    this.click.play();
  }
  sonidoOk() {
    this.click.src = "../../sonidos/click.mp3";
    this.click.currentTime = 0.5;
    this.click.volume = 0.2;
    this.click.play();
  }

}
