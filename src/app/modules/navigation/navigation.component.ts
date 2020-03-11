import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  activeId: string;

  links = [
    { title: 'Home', href: '/home' },
    { title: 'Dokumente', href: '/item/documents/document/documents' },
    { title: 'Fotos', href: '/item/fotos/foto/fotos' }
  ];

  constructor(
    public route: ActivatedRoute
   ) { }

  ngOnInit(): void {
  }

}
