import { Component, OnInit, Input} from '@angular/core';
import { TestModel } from './test.model';

@Component({
  selector: 'app-show-test',
  templateUrl: './show-test.component.html',
  styleUrls: ['./show-test.component.scss']
})
export class ShowTestComponent implements OnInit {
 @Input() test: TestModel;
  constructor() { }

  ngOnInit() {
  }

}