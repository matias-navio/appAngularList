import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  
  public title: String = "Lista productos"; 
  private readonly productService = inject(ProductService);

  products: any[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(prod => {
        this.products = prod;
        console.log(prod);
      }
    )
  }
}
