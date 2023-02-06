import { Ifilms } from './../../models/models';
import { Component, Input} from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
// @Input() Films: Ifilms = {gender: '', tit: '', imagen:{src: '', alt: ''}}
@Input() accionFilms: any;
@Input() animeFilms: any;
@Input() dramaFilms: any;
@Input() top5: any;
@Input() wordAnime: string = ''
@Input() wordAction: string = ''
@Input() wordDrama: string= ''
@Input() wordTop: string= ''
}

