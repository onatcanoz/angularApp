import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/_index';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  //We call the service typed method here.
  constructor(private commonService: CommonService) { }

  commonList: any[] = [];


  ngOnInit(): void {
    this.getList();
  }

  getList() {
    const _this = this;
		this.commonService.getList().subscribe((data) => {
			_this.commonList = data;
      // for (let i = 0; i < _this.commonList.length; i++) {
      //   this.test = _this.commonList[i];
        
      // }
		})
  }

}
