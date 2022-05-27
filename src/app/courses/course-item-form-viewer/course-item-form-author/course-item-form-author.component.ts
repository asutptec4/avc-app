import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { combineLatest, map, Observable, of, Subject, switchMap, takeUntil, tap } from 'rxjs';

import { Author } from '../../../core/common';
import { AuthorsDataService } from '../author/authors-data.service';

@Component({
  selector: 'app-course-item-form-author',
  templateUrl: './course-item-form-author.component.html',
  styleUrls: ['./course-item-form-author.component.scss'],
  providers: [AuthorsDataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormAuthorComponent implements OnInit {
  @Input() control!: FormControl | null;

  @ViewChild('authorsInput') authorsInput!: ElementRef<HTMLInputElement>;

  authorsControl: FormControl = new FormControl();
  private readonly destroy = new Subject<void>();
  filteredAuthors: Observable<Author[]> = of([]);
  selectedAuthors: Author[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private authorsDataService: AuthorsDataService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initSelectedAuthors();
    this.initFilteredAuthors();
  }

  private initSelectedAuthors(): void {
    this.control!.valueChanges.pipe(
      tap((value) => {
        this.selectedAuthors = value;
        this.changeDetectorRef.markForCheck();
      }),
      takeUntil(this.destroy)
    ).subscribe();
  }

  private initFilteredAuthors(): void {
    this.filteredAuthors = this.authorsDataService.getAll().pipe(
      switchMap((authors) => combineLatest([of(authors), this.authorsControl.valueChanges])),
      map(([authors, value]) => this.getFilteredAuthors(authors, value))
    );
  }

  private getFilteredAuthors(authors: Author[], value: string): Author[] {
    return authors
      .filter((a) => this.isContainSubstring(a.name, value) || this.isContainSubstring(a.lastName, value))
      .filter(this.isAuthorIsSelected.bind(this));
  }

  private isContainSubstring(origin: string, search: string): boolean {
    return typeof search === 'string' && origin.trim().toLowerCase().includes(search.trim().toLowerCase());
  }

  private isAuthorIsSelected(author: Author): boolean {
    return !this.selectedAuthors.some((s) => author.id === s.id);
  }

  selected(event: MatAutocompleteSelectedEvent) {
    this.selectedAuthors.push(event.option.value);
    this.updateControlValue(this.selectedAuthors);
    this.authorsInput.nativeElement.value = '';
    this.authorsControl.setValue(null);
  }

  private updateControlValue(authors: Author[]): void {
    if (this.control) {
      this.control.setValue(authors);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedAuthors.push({ id: value, name: value, lastName: value });
    }
    event.chipInput!.clear();
    this.authorsControl.setValue(null);
  }

  remove(author: Author): void {
    const index = this.selectedAuthors.indexOf(author);
    if (index >= 0) {
      this.selectedAuthors.splice(index, 1);
      this.updateControlValue(this.selectedAuthors);
    }
  }
}
