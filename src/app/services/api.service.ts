import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

const baseUrl = 'http://localhost:3000';
const customerUrl = 'http://localhost:3000/customers';
const dealerUrl = 'http://localhost:3000/dealers';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getbyId(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getbyEmail(email: any): Observable<any> {
    return this.http.get(`${baseUrl}/users/email/${email}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/users`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch(`${baseUrl}/users/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/users/${id}`);
  }
  getCustomers(): Observable<any> {
    return this.http.get(`${customerUrl}`);
  }
  getDealer(): Observable<any> {
    return this.http.get(`${dealerUrl}`);
  }
  inActivateUser(id,status): Observable<any> {
    return this.http.patch(`${baseUrl}/users/inactivate/${id}`,status);
  }
  async exportToExcel(data, filename) {
    {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    XLSX.writeFile(wb, filename + '.xlsx');
    }
    }
    filterItems(data,searchTerm) {
      return data.data.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }

	getProducts(){
    return this.http.get(`${baseUrl}/products`);
	}

	 getProductByPID(id: any){
    return this.http.get(`${baseUrl}/getOneProduct/${id}`);
	}

	createCart(data: any){
    //console.log(data);
     return this.http.post(`${baseUrl}/createCart`, data);
   }

   getCartById(id: any){
     return this.http.get(`${baseUrl}/getCartById/${id}`);
   }

   deleteItem(id: any){
    return this.http.delete(`${baseUrl}/removeItem/${id}`);
  }

  createOrder(data: any){
    //console.log(data);
     return this.http.post(`${baseUrl}/createOrder`, data);
   }

   getOrders(id: any){
    return this.http.get(`${baseUrl}/getOrders/${id}`);
  }

  getAddress(){
    return this.http.get(`${baseUrl}/getAddress`);
  }

  getOrdersById(id: any){
    return this.http.get(`${baseUrl}/getOrdersById/${id}`);
  }

  getCancelOrders(id){
    return this.http.get(`${baseUrl}/getCancelOrders/${id}`);
  }

  cancelBooking(id, status): Observable<any> {
    return this.http.put(`${baseUrl}/cancelBooking/${id}`, status);
  }

}
