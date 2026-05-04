import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ProductsStore } from '../../redux/products.store';

@Component({
  templateUrl: './products.component.html',
  styleUrl: './proucts.component.scss',
  imports: [MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPage implements OnInit {
  public readonly productsStore = inject(ProductsStore);

  ngOnInit() {
    this.productsStore.loadProducts();
  }
}
