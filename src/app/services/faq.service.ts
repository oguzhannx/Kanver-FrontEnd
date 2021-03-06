import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faq } from 'src/app/models/faq/faq';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FaqService {

  apiUrl = "https://kanver.somee.com/IIS/"

  constructor(private httpClient:HttpClient) { }

  getFaqs():Observable<ListResponseModel<Faq>>{
    let newPath = this.apiUrl+'getAllFaq';
    return this.httpClient.get<ListResponseModel<Faq>>(newPath);
  }
}
