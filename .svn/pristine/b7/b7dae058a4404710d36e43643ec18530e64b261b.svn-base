import { Component, OnInit } from '@angular/core';
import { LoadingService, LoadingComponent } from '../Loading/loading.component';
import { HttpClient } from '@angular/common/http';

class HeaderItem {

    private headerKey?: string;
    private headerItem?: string;
}

interface Header {

   readonly data: Array<HeaderItem>;
   readonly headerList: HeaderItem[];
}

@Component({

    selector: 'app-comm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})

export class CommHeaderComponent implements OnInit {

    private headerList: HeaderItem[];
    private headerItem: Header;
    private headerTitle = '自助建站';

    constructor(private http: HttpClient, private Loadingservice: LoadingService) {}

    ngOnInit() {
        this.getHeaderList();
    }

    private getHeaderList(): void {

        this.Loadingservice.show.emit(null);
        this.http.get<Header>('http://localhost:3000/headers')
        .toPromise()
        .then((response) => {
            this.headerList = response.data;
            this.Loadingservice.hide.emit(null);
        }).catch((err) => {

            this.Loadingservice.hide.emit(null);
            console.log(err)
        } );
    }
}
