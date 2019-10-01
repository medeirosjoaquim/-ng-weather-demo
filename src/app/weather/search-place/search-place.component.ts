import { Component, AfterViewInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import * as places from 'places.js';
@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.scss']
})
export class SearchPlaceComponent implements AfterViewInit {
  @ViewChild('addressInput', {static: true }) private addressInput: ElementRef;

  @Output() placeResult = new EventEmitter<JSON>();

  constructor() { }

   ngAfterViewInit() {
    const placesAutocomplete = places({
      appId: 'plYLJA6WH2HP',
      apiKey: 'fb7e3a103ac9a2e341b5ce364c05998e',
      container: this.addressInput.nativeElement,
      countries: ['br'],
      type: ['city'],
      aroundLatLngViaIP: false
    });
    placesAutocomplete.on('change', e => this.placeResult.emit(e.suggestion));
  }
}
