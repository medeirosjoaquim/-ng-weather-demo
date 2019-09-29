import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
    Made by <a href="
    https://linkedin.com/in/joaquim-medeiros" target="_blank"
    class="footer-bio--name"
    rel="noopener noreferrer">Joaquim</a>with<span role="img" aria-label="love">❤️</span>{{ year }}
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
