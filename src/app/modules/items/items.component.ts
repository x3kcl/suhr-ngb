import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import * as prettyBytes from 'pretty-bytes';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  Items: any = [];
  Item: any;
  name: string;
  id: string;
  idname: string;
  title = 'Kein Titel';
  subtitle = 'Kein Untertitel';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public items: ItemsService,
  ) {
    this.id = this.route.snapshot.params.id;
    this.name = this.route.snapshot.params.name;
    this.idname = this.route.snapshot.params.idname;

    console.log('Item got name ' + this.name + ' and id ' + this.id + ' id name ' + this.idname);

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.Item = this.router.getCurrentNavigation().extras.state.item;
        console.log('Items', this.Item);
        this.subtitle = this.Item.title;
      }
    });
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    return this.items.getItem(this.name, this.id, this.idname).subscribe((data: any) => {
      this.Items = [];
      console.log(data);
      const items = data.data;
      const result = [];
      const url = '';
      for (const item of items) {
        const tmp = {
          id: item.id,
          status: item.status,
          owner: item.owner.id,
          created_on: item.created_on,
          documents_id: item[ this.idname + '_id'].id,
          url: item.file.data.full_url,
          title: item.file.title,
          size: prettyBytes(item.file.filesize),
          filename_download: item.file.data.filename_download
        };
        if (item[ this.idname + '_id'].title) {
          const info = item[ this.idname + '_id'];
          console.log('title_id', info);
          this.title = info.title;
          this.subtitle = info.subtitle_id.title;
        }
        // console.log("size", item.file.filesize);
        result[result.length] = tmp;
      }
      this.Items = result;

    });
  }

}
