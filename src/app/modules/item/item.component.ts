import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { Item, Category, Subtitle } from 'src/app/classes/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  Items: any = [];
  name: string;
  subname: string;
  title: string;
  subtitle: string;
  idname: string;
  Categories: any = [];

  constructor(
    private route: ActivatedRoute,
    public items: ItemsService,
    private router: Router,
  ) {
    this.name = this.route.snapshot.params.name;
    this.subname = this.route.snapshot.params.subname;
    this.idname = this.route.snapshot.params.idname;
    console.log('Item got name ' + this.name + ' with sub name ' + this.subname + ' id name ' + this.idname);
  }
  ngOnInit() {
    this.loadItemSections();
  }

  loadItemSections() {
    return this.items.getItems(this.name).subscribe((data: any ) => {
      this.Categories = [];
      console.log(data);
      const categoryMap = new Map();
      const items = data.data;
      const result = [];
      for ( const item of items ) {
        let url = '';
        console.log('title', item.title_id.redirect_id.title);
        if ( item.title_id.redirect_id.title === 'items' ) {
          url = 'items/' + this.subname + '/' + item.id + '/' + this.idname;
        } else if (item.title_id.redirect_id.title === 'foto') {
          url = 'foto/' + + item.id;
        }
        console.log('for', item, url);
        console.log(item.category_id);
        const tmp: Item = {
          id: item.subtitle_id.id,
          status: item.subtitle_id.status,
          owner: item.subtitle_id.owner,
          created_on: item.subtitle_id.created_on,
          title: item.subtitle_id.title,
          url,
          redirectMode: item.title_id.redirect_id.title
        };
        if (item.title_id.title) {
          this.title = item.title_id.title;
          this.subtitle = item.title_id.subtitle;
        }
        if ( categoryMap.has(item.category_id.title) ) {
          const subMap = categoryMap.get(item.category_id.title);
          if ( subMap.has(item.subtitle_id.title) ) {
            const itemMap = subMap.get(item.subtitle_id.title);
            itemMap.set(item.subtitle_id.title, tmp);
          } else {
            const itemMap = new Map();
            itemMap.set(item.subtitle_id.title, tmp);
            subMap.set(item.subtitle_id.title, itemMap);
          }
        } else {
          const subMap = new Map();
          const itemMap = new Map();
          itemMap.set(item.subtitle_id.title, tmp);
          subMap.set(item.subtitle_id.title, itemMap);
          categoryMap.set(item.category_id.title, subMap);
        }
        result[result.length] = tmp;
      }

      categoryMap.forEach((value: boolean, key: string) => {
        const category: Category = { title: key };
        const subMap = categoryMap.get(key);
        console.log('submap', subMap);
        subMap.forEach((value: boolean, key: string) => {
          console.log('key', key);
          const itemArray = subMap.get(key);
          console.log('itemArray', itemArray);
          const nav = itemArray.get(key);
          const subtitle: Subtitle = { title: key, item: nav };
          if (category.subtitleList) {
            category.subtitleList.push(subtitle);
          } else {
            category.subtitleList = [subtitle];
          }
          category.subtitleList.sort( ( n1, n2 ) => {
            if (n1.title > n2.title ) { return 1; }
            if (n1.title < n2.title ) { return -1; }
            return 0;
          });
        });
        this.Categories[this.Categories.length] = category;
        console.log(key, value);
      });
      console.log(categoryMap);
      console.log(this.Categories);
      this.Items = result;
    } );
  }

  openDetailsWithState(item: { id: string; title: string; url: string; }) {
    const navigationExtras: NavigationExtras = {
      state: {
        item: {
          id: item.id,
          title: item.title
        }
      }
    };
    console.log(item);
    this.router.navigate([ item.url ], navigationExtras);
  }
}
