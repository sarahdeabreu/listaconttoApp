import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { contatos } from '../models/contatos.model';
import { CommonModule } from '@angular/common';
import { DadosService } from '../services/dados.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, RouterLink],
})
export class HomePage {

  listaContatos: contatos[] = [
    {
      foto: 'https://sabrynarosa.com/wp-content/uploads/2020/11/filme-o-morro-dos-ventos-uivantes.jpg',
      nome: 'RAUL',
      email: 'raulzinhomenininho@gmail.com',
      id: 1,
      pagina: '/contato'
    },
    {
      foto: 'https://images.saymedia-content.com/.image/t_share/MTc0NDYwNjg2NTMyNjE3ODYy/the-ultimate-fate-of-everyone-from-phantom-of-the-opera.jpg',
      nome: 'MIRELLA',
      email: 'mirellalinda@gmail.com',
      id: 2,
      pagina: '/contato'
    },
    {
      foto: 'https://s2.glbimg.com/1goDrD8U0XvyIMJvNLq1L6HlGtM=/e.glbimg.com/og/ed/f/original/2018/09/27/donatella.jpg',
      nome: 'VERSACE',
      email: 'donatella@gmail.com',
      id: 3,
      pagina: '/contato'
    },
    {
      foto: 'https://s2.glbimg.com/SVwOj9PcoWkUdfZrzF_duKvSVaY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/E/8/q2RasdRMWdGuasK7KL4g/98897053-anna-wintour-arrives-at-the-in-america-an-anthology-of-fashion-themed-met-gala-at-the-metro.jpg',
      nome: 'GABRIEL',
      email: 'gabrielzinho@gmail.com',
      id: 4,
      pagina: '/contato'
    },
    {
      foto: 'https://jpimg.com.br/uploads/2018/11/36687820_1587201164717893_9210176651780947968_n.jpg',
      nome: 'MONIQUE',
      email: 'moniquelinda@gmail.com',
      id: 5,
      pagina: '/contato'
    }
  ];


  constructor(public dadosService: DadosService, public route: Router) {}

  exibirContato(contato: contatos){
    this.dadosService.guardarDados('contato', contato);
    this.route.navigateByUrl('/contato')
  }


}
