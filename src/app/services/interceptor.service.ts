
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { environment } from '../../environments/environment';


@Injectable()
export class InterceptorService implements HttpInterceptor {

	constructor(private router: Router) { }
	// private auth: AuthService,
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// Get the auth header from the service.
		let token = null;
		let authHeader = null;
		token = localStorage.getItem('token');

		const baseUrlData = environment.baseUrlData;


		if (!!token) {
			authHeader = token;
		}

		// Clone the request to add the new header.
		let cloneReq: any = null;
		if (authHeader != null) {
			let headers = req.headers.set("Authorization", "Bearer " + authHeader);

			if (req.url.includes(baseUrlData)) {
				// Do not redeclare 'headers' here
				cloneReq = req.clone({ headers: headers, url: req.url });
			} else {
				cloneReq = req.clone({ headers: headers, url: req.url });
			}
		} else {
			let headers = req.headers;
			cloneReq = req.clone({ headers: headers, url: req.url });
		}

		// Pass on the cloned request instead of the original request.
		return next.handle(cloneReq).pipe(
			tap((event => {
				if (event instanceof HttpResponse) {
				}
			}), err => {
				let error = err instanceof HttpErrorResponse;
				let status = err.error['status'];
				let statuses = [401, 2, 3, 11, 151, 153, 18, 300, 301, 227];
				if (error && (statuses.includes(status) || statuses.includes(err.status))) {
					this.router.navigateByUrl('');
					localStorage.removeItem('token');
				}
			}));
	}


}
