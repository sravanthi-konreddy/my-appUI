import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sudo } from './model/sudoku';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  constructor(private http: HttpClient) { }

  solveSudoku(sudo:Sudo)
  {
    console.log("before Sudoku hit");
    return this.http.post<Sudo>("http://localhost:8080/demoapi/api/solveSudoku",sudo)
  }
}
