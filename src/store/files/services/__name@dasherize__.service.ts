import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { <%= classify(name) %>Adapter, <%= classify(name) %> } from 'src/app/shared/models/<%= name %>';

@Injectable()
export class <%= classify(name) %>Service {
    private apiUrl = environment.appApi.baseUrl + '/<%= pluralize(name) %>';

    constructor(
        private http: HttpClient,
        private <%= name %>Adapter: <%= classify(name) %>Adapter,
    ) { }


    index(): Observable<<%= classify(name) %>[]> {
        return this.http
            .get(this.apiUrl)
                .pipe(
                    map((data: any[]) => data.map(item => this.<%= name %>Adapter.adapt(item)))
                );
	}

    show(id: string | number): Observable<<%= classify(name) %>> {
        return this.http
            .get(this.apiUrl + '/' + id)
                .pipe(
                    map((data: any) => this.<%= name %>Adapter.adapt(data))
                );
    }

    create(data: <%= classify(name) %>): Observable<<%= classify(name) %>> {
        return this.http
            .post(this.apiUrl, this.<%= name %>Adapter.restore(data))
                .pipe(
                    map((data: any) => this.<%= name %>Adapter.adapt(data))
                );
    }

    update(data: <%= classify(name) %>): Observable<<%= classify(name) %>> {
        return this.http
            .put(this.apiUrl + '/' + data.id, this.<%= name %>Adapter.restore(data))
                .pipe(
                    map((data: any) => this.<%= name %>Adapter.adapt(data))
                );
    }

    destroy(id: string | number): Observable<any> {
        return this.http
            .delete(this.apiUrl + '/' + id);
    }

}
