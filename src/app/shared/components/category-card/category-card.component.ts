import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  standalone: true,
})
export class CategoryCardComponent {
  @Input() categoryName!: string;
  @Input() iconClass!: string;
} 