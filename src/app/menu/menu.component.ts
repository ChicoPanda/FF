import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  click: any = new Audio();
  musica: any = new Audio();
  ok: any = new Audio();
  
  ngOnInit() {

    this.musica.src = "../../sonidos/musicaInicio.mp3";
    this.musica.currentTime = 2;
    this.musica.volume = 0.5;
    this.musica.play()

  }
  sonido() {
    this.click.src = "../../sonidos/hoverClick.mp3";
    this.click.currentTime = 0.6;
    this.click.volume = 0.2;
    this.click.play();
  }
  sonidoOk() {
    this.ok.src = "../../sonidos/click.mp3";
    this.ok.currentTime = 0.55;
    this.ok.volume = 0.2;
    this.ok.play();
    
  }
}
