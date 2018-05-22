import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiManagerService } from './../../services/api-manager/api-manager.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any = null;
  constructor(
    private router: Router,
    private apiManagerService: ApiManagerService
  ) { }

  async ngOnInit() {
    const characters = await this.apiManagerService.getCharacters();
    if (!characters.error ) {
      this.characters =  characters.data;
    }
  }

  showDetails(index) {
    this.router.navigate([`/details`, (index + 1)]);
  }
}
