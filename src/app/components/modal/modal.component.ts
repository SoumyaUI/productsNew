import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  private element: any;
  @Output() closeEvent = new EventEmitter()

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);
  }

  ngOnDestroy(): void {
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(el): void {

    if (el.target.classList.contains("modal-open")) {
      this.element.style.display = 'none';
      document.body.classList.remove('modal-open');
      this.closeEvent.emit(true);
    }
  }

  closeIoc(){
    this.element.style.display = 'none';
      document.body.classList.remove('modal-open');
      this.closeEvent.emit(true);
  }

}
