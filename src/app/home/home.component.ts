import { Component } from '@angular/core';
import { menjeans } from 'src/Data/Men/Men_Jeans';
import { menKurta } from 'src/Data/Men/Mens_Kurta';
import { mensShoes } from 'src/Data/Men/men_shoes';
import { lahegaCholi } from 'src/Data/women/lahega_choli';
import { womengown } from 'src/Data/women/women_gouns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menJeans: any
  Womengouns: any
  lehangacholi: any
  menskurta:any
  mensShoes: any

  ngOnInit() {
    this.menJeans = menjeans
    this.Womengouns = womengown
    this.lehangacholi = lahegaCholi
    this.menskurta = menKurta
    this.mensShoes = mensShoes
  }

}
