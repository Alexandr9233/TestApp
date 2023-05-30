import { Component, OnInit } from '@angular/core';
import { UnknownI } from 'src/app/shared/interfaces/unknown.interface';
import { UnknownService } from 'src/app/shared/services/unknown/unknown.service';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.scss']
})
export class UnknownComponent implements OnInit {

  public unknown: UnknownI[];

  constructor(private unknownService: UnknownService) {}

  ngOnInit(): void {
    this.initUnknown()
  }

  private initUnknown() {
    this.unknownService.getUnknown().subscribe(res => {
      this.unknown = res.data
      console.log(this.unknown)
    })
  }
}
