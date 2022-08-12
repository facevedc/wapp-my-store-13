import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastEvent } from 'src/app/model/toastEvent';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cart-toaster',
  templateUrl: './cart-toaster.component.html',
  styleUrls: ['./cart-toaster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartToasterComponent implements OnInit {

  currentToasts: ToastEvent[] = [];

  constructor(
    private toastService: ToastService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscribeToToasts();
  }

  subscribeToToasts() {
    this.toastService.toastEvents.subscribe((toasts) => {
      const currentToast: ToastEvent = {
        type: toasts.type,
        title: toasts.title,
        message: toasts.message,
      };
      this.currentToasts.push(currentToast);
      this.cdr.detectChanges();
    });
  }

  dispose(index: number) {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }
}
