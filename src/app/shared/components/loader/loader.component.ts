import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/components/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {

  public isVisible: Boolean;
  constructor(
    private _loaderService: LoaderService
  ) {
    this.isVisible = false;
  }

  ngOnInit() {
    this._loaderService.loaderStatus.subscribe((val: boolean) => {
      this.isVisible = val;
    });
  }

}
