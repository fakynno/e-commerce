import { Book } from './model/book';
import { BookService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  book: BookService;

  constructor(bookService: BookService) {

    this.book = bookService;
   }

  ngOnInit(): void {

    this.livros = this.book.getBook().subscribe((lista => {
      this.livros = lista;
      console.log(this.livros);

    }))
  }

}
