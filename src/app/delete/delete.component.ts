import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() item: string|undefined;
  // @input() Used to hold data from the parent component

  @Output() onCancel = new EventEmitter();
  //oncancel - userdefined event

  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit();
  }

}
