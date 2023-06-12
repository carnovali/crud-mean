import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id!: string;
  model!: Product;
  constructor(    
    private crudService: CrudService,
    private alertifyService:AlertifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.crudService.getProduct(this.id).subscribe((res) => {
      this.model = {
        _id: res._id,
        description: res.description,
        price: res.price,
        stock: res.stock,
      };
    });
  }

  onSubmit(product: Product) {
    this.crudService.updateProduct(this.id, product).subscribe({
      next: () => {
        this.alertifyService.success('¡Product updated!')
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        this.alertifyService.error(error)
      },
    });
  }
}