import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-drawer',
  templateUrl: 'drawer.component.html' ,
  styles: [
    'drawer.component.styles'
  ]
})
export class DrawerComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'right';
  @Input() width: number = 0;
  @Input() styles: string = '';

  @Output() drawerClosed = new EventEmitter();

  public close(){
    this.drawerClosed.emit();
  };

  get _styles(): string{
    return  this.styles += `width: ${this.width}px; ${this.position}: ${this.isOpen ? 0 : -1 * this.width}px`;
  };

  constructor() { };
  
  ngOnInit(): void { };

}
