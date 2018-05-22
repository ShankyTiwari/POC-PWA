import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiManagerService } from './../../services/api-manager/api-manager.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiManagerService: ApiManagerService
  ) { }

  async ngOnInit() {
    const characterId = this.activatedRoute.snapshot.params.id;
    const characterDetail = await this.apiManagerService.getCharacterDetail({id: characterId});
    if (!characterDetail.error ) {
      this.details =  characterDetail.data;
    }
  }

}
