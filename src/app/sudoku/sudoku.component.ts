import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Sudo } from '../model/sudoku';
import { SudokuService } from '../sudoku.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  submitTableForm;
  sudokuInput:Sudo;
  


  constructor(private formBuilder: FormBuilder,private sudoServ:SudokuService) {

    this.submitTableForm = this.formBuilder.group({
      zero0:new FormControl(''),
      zero1:new FormControl(''),
      zero2:new FormControl(''),
      zero3:new FormControl(''),
      zero4:new FormControl(''),
      zero5:new FormControl(''),
      zero6:new FormControl(''),
      zero7:new FormControl(''),
      zero8:new FormControl(''),
      zero9:new FormControl(''),
      
      one0:new FormControl(''),
      one1:new FormControl(''),
      one2:new FormControl(''),
      one3:new FormControl(''),
      one4:new FormControl(''),
      one5:new FormControl(''),
      one6:new FormControl(''),
      one7:new FormControl(''),
      one8:new FormControl(''),
      one9:new FormControl(''),

      two0:new FormControl(''),
      two1:new FormControl(''),
      two2:new FormControl(''),
      two3:new FormControl(''),
      two4:new FormControl(''),
      two5:new FormControl(''),
      two6:new FormControl(''),
      two7:new FormControl(''),
      two8:new FormControl(''),
      two9:new FormControl(''),

      three0:new FormControl(''),
      three1:new FormControl(''),
      three2:new FormControl(''),
      three3:new FormControl(''),
      three4:new FormControl(''),
      three5:new FormControl(''),
      three6:new FormControl(''),
      three7:new FormControl(''),
      three8:new FormControl(''),
      three9:new FormControl(''),

      four0:new FormControl(''),
      four1:new FormControl(''),
      four2:new FormControl(''),
      four3:new FormControl(''),
      four4:new FormControl(''),
      four5:new FormControl(''),
      four6:new FormControl(''),
      four7:new FormControl(''),
      four8:new FormControl(''),
      four9:new FormControl(''),

      five0:new FormControl(''),
      five1:new FormControl(''),
      five2:new FormControl(''),
      five3:new FormControl(''),
      five4:new FormControl(''),
      five5:new FormControl(''),
      five6:new FormControl(''),
      five7:new FormControl(''),
      five8:new FormControl(''),
      five9:new FormControl(''),

      six0:new FormControl(''),
      six1:new FormControl(''),
      six2:new FormControl(''),
      six3:new FormControl(''),
      six4:new FormControl(''),
      six5:new FormControl(''),
      six6:new FormControl(''),
      six7:new FormControl(''),
      six8:new FormControl(''),
      six9:new FormControl(''),

      seven0:new FormControl(''),
      seven1:new FormControl(''),
      seven2:new FormControl(''),
      seven3:new FormControl(''),
      seven4:new FormControl(''),
      seven5:new FormControl(''),
      seven6:new FormControl(''),
      seven7:new FormControl(''),
      seven8:new FormControl(''),
      seven9:new FormControl(''),

      eight0:new FormControl(''),
      eight1:new FormControl(''),
      eight2:new FormControl(''),
      eight3:new FormControl(''),
      eight4:new FormControl(''),
      eight5:new FormControl(''),
      eight6:new FormControl(''),
      eight7:new FormControl(''),
      eight8:new FormControl(''),
      eight9:new FormControl(''),

      nine0:new FormControl(''),
      nine1:new FormControl(''),
      nine2:new FormControl(''),
      nine3:new FormControl(''),
      nine4:new FormControl(''),
      nine5:new FormControl(''),
      nine6:new FormControl(''),
      nine7:new FormControl(''),
      nine8:new FormControl(''),
      nine9:new FormControl('')
      
    });   


   }

  ngOnInit() {
    this.sudokuInput={inputArray:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]};
    console.log("in sudoku component")
  }

  onSubmitTable(val)
  {
    
   this.sudokuInput.inputArray[0][0]=val.zero0;
   this.sudokuInput.inputArray[0][1]=val.zero1;
   this.sudokuInput.inputArray[0][2]=val.zero2;
   this.sudokuInput.inputArray[0][3]=val.zero3;
   this.sudokuInput.inputArray[0][4]=val.zero4;
   this.sudokuInput.inputArray[0][5]=val.zero5;
   this.sudokuInput.inputArray[0][6]=val.zero6;
   this.sudokuInput.inputArray[0][7]=val.zero7;
   this.sudokuInput.inputArray[0][8]=val.zero8;

   this.sudokuInput.inputArray[1][0]=val.one0;
   this.sudokuInput.inputArray[1][1]=val.one1;
   this.sudokuInput.inputArray[1][2]=val.one2;
   this.sudokuInput.inputArray[1][3]=val.one3;
   this.sudokuInput.inputArray[1][4]=val.one4;
   this.sudokuInput.inputArray[1][5]=val.one5;
   this.sudokuInput.inputArray[1][6]=val.one6;
   this.sudokuInput.inputArray[1][7]=val.one7;
   this.sudokuInput.inputArray[1][8]=val.one8;

   this.sudokuInput.inputArray[2][0]=val.two0;
   this.sudokuInput.inputArray[2][1]=val.two1;
   this.sudokuInput.inputArray[2][2]=val.two2;
   this.sudokuInput.inputArray[2][3]=val.two3;
   this.sudokuInput.inputArray[2][4]=val.two4;
   this.sudokuInput.inputArray[2][5]=val.two5;
   this.sudokuInput.inputArray[2][6]=val.two6;
   this.sudokuInput.inputArray[2][7]=val.two7;
   this.sudokuInput.inputArray[2][8]=val.two8;

   this.sudokuInput.inputArray[3][0]=val.three0;
   this.sudokuInput.inputArray[3][1]=val.three1;
   this.sudokuInput.inputArray[3][2]=val.three2;
   this.sudokuInput.inputArray[3][3]=val.three3;
   this.sudokuInput.inputArray[3][4]=val.three4;
   this.sudokuInput.inputArray[3][5]=val.three5;
   this.sudokuInput.inputArray[3][6]=val.three6;
   this.sudokuInput.inputArray[3][7]=val.three7;
   this.sudokuInput.inputArray[3][8]=val.three8;

   this.sudokuInput.inputArray[4][0]=val.four0;
   this.sudokuInput.inputArray[4][1]=val.four1;
   this.sudokuInput.inputArray[4][2]=val.four2;
   this.sudokuInput.inputArray[4][3]=val.four3;
   this.sudokuInput.inputArray[4][4]=val.four4;
   this.sudokuInput.inputArray[4][5]=val.four5;
   this.sudokuInput.inputArray[4][6]=val.four6;
   this.sudokuInput.inputArray[4][7]=val.four7;
   this.sudokuInput.inputArray[4][8]=val.four8;

   this.sudokuInput.inputArray[5][0]=val.five0;
   this.sudokuInput.inputArray[5][1]=val.five1;
   this.sudokuInput.inputArray[5][2]=val.five2;
   this.sudokuInput.inputArray[5][3]=val.five3;
   this.sudokuInput.inputArray[5][4]=val.five4;
   this.sudokuInput.inputArray[5][5]=val.five5;
   this.sudokuInput.inputArray[5][6]=val.five6;
   this.sudokuInput.inputArray[5][7]=val.five7;
   this.sudokuInput.inputArray[5][8]=val.five8;

   this.sudokuInput.inputArray[6][0]=val.six0;
   this.sudokuInput.inputArray[6][1]=val.six1;
   this.sudokuInput.inputArray[6][2]=val.six2;
   this.sudokuInput.inputArray[6][3]=val.six3;
   this.sudokuInput.inputArray[6][4]=val.six4;
   this.sudokuInput.inputArray[6][5]=val.six5;
   this.sudokuInput.inputArray[6][6]=val.six6;
   this.sudokuInput.inputArray[6][7]=val.six7;
   this.sudokuInput.inputArray[6][8]=val.six8;

   this.sudokuInput.inputArray[7][0]=val.seven0;
   this.sudokuInput.inputArray[7][1]=val.seven1;
   this.sudokuInput.inputArray[7][2]=val.seven2;
   this.sudokuInput.inputArray[7][3]=val.seven3;
   this.sudokuInput.inputArray[7][4]=val.seven4;
   this.sudokuInput.inputArray[7][5]=val.seven5;
   this.sudokuInput.inputArray[7][6]=val.seven6;
   this.sudokuInput.inputArray[7][7]=val.seven7;
   this.sudokuInput.inputArray[7][8]=val.seven8;

   this.sudokuInput.inputArray[8][0]=val.eight0;
   this.sudokuInput.inputArray[8][1]=val.eight1;
   this.sudokuInput.inputArray[8][2]=val.eight2;
   this.sudokuInput.inputArray[8][3]=val.eight3;
   this.sudokuInput.inputArray[8][4]=val.eight4;
   this.sudokuInput.inputArray[8][5]=val.eight5;
   this.sudokuInput.inputArray[8][6]=val.eight6;
   this.sudokuInput.inputArray[8][7]=val.eight7;
   this.sudokuInput.inputArray[8][8]=val.eight8;

   
  
   this.sudoServ.solveSudoku(this.sudokuInput)
   .subscribe(res=>{
    this.submitTableForm.get('zero0').setValue(res.inputArray[0][0]);
    this.submitTableForm.get('zero1').setValue(res.inputArray[0][1]);
    this.submitTableForm.get('zero2').setValue(res.inputArray[0][2]);
    this.submitTableForm.get('zero3').setValue(res.inputArray[0][3]);
    this.submitTableForm.get('zero4').setValue(res.inputArray[0][4]);
    this.submitTableForm.get('zero5').setValue(res.inputArray[0][5]);
    this.submitTableForm.get('zero6').setValue(res.inputArray[0][6]);
    this.submitTableForm.get('zero7').setValue(res.inputArray[0][7]);
    this.submitTableForm.get('zero8').setValue(res.inputArray[0][8]);

    this.submitTableForm.get('one0').setValue(res.inputArray[1][0]);
    this.submitTableForm.get('one1').setValue(res.inputArray[1][1]);
    this.submitTableForm.get('one2').setValue(res.inputArray[1][2]);
    this.submitTableForm.get('one3').setValue(res.inputArray[1][3]);
    this.submitTableForm.get('one4').setValue(res.inputArray[1][4]);
    this.submitTableForm.get('one5').setValue(res.inputArray[1][5]);
    this.submitTableForm.get('one6').setValue(res.inputArray[1][6]);
    this.submitTableForm.get('one7').setValue(res.inputArray[1][7]);
    this.submitTableForm.get('one8').setValue(res.inputArray[1][8]);

    this.submitTableForm.get('two0').setValue(res.inputArray[2][0]);
    this.submitTableForm.get('two1').setValue(res.inputArray[2][1]);
    this.submitTableForm.get('two2').setValue(res.inputArray[2][2]);
    this.submitTableForm.get('two3').setValue(res.inputArray[2][3]);
    this.submitTableForm.get('two4').setValue(res.inputArray[2][4]);
    this.submitTableForm.get('two5').setValue(res.inputArray[2][5]);
    this.submitTableForm.get('two6').setValue(res.inputArray[2][6]);
    this.submitTableForm.get('two7').setValue(res.inputArray[2][7]);
    this.submitTableForm.get('two8').setValue(res.inputArray[2][8]);

    this.submitTableForm.get('three0').setValue(res.inputArray[3][0]);
    this.submitTableForm.get('three1').setValue(res.inputArray[3][1]);
    this.submitTableForm.get('three2').setValue(res.inputArray[3][2]);
    this.submitTableForm.get('three3').setValue(res.inputArray[3][3]);
    this.submitTableForm.get('three4').setValue(res.inputArray[3][4]);
    this.submitTableForm.get('three5').setValue(res.inputArray[3][5]);
    this.submitTableForm.get('three6').setValue(res.inputArray[3][6]);
    this.submitTableForm.get('three7').setValue(res.inputArray[3][7]);
    this.submitTableForm.get('three8').setValue(res.inputArray[3][8]);

    this.submitTableForm.get('four0').setValue(res.inputArray[4][0]);
    this.submitTableForm.get('four1').setValue(res.inputArray[4][1]);
    this.submitTableForm.get('four2').setValue(res.inputArray[4][2]);
    this.submitTableForm.get('four3').setValue(res.inputArray[4][3]);
    this.submitTableForm.get('four4').setValue(res.inputArray[4][4]);
    this.submitTableForm.get('four5').setValue(res.inputArray[4][5]);
    this.submitTableForm.get('four6').setValue(res.inputArray[4][6]);
    this.submitTableForm.get('four7').setValue(res.inputArray[4][7]);
    this.submitTableForm.get('four8').setValue(res.inputArray[4][8]);

    this.submitTableForm.get('five0').setValue(res.inputArray[5][0]);
    this.submitTableForm.get('five1').setValue(res.inputArray[5][1]);
    this.submitTableForm.get('five2').setValue(res.inputArray[5][2]);
    this.submitTableForm.get('five3').setValue(res.inputArray[5][3]);
    this.submitTableForm.get('five4').setValue(res.inputArray[5][4]);
    this.submitTableForm.get('five5').setValue(res.inputArray[5][5]);
    this.submitTableForm.get('five6').setValue(res.inputArray[5][6]);
    this.submitTableForm.get('five7').setValue(res.inputArray[5][7]);
    this.submitTableForm.get('five8').setValue(res.inputArray[5][8]);

    this.submitTableForm.get('six0').setValue(res.inputArray[6][0]);
    this.submitTableForm.get('six1').setValue(res.inputArray[6][1]);
    this.submitTableForm.get('six2').setValue(res.inputArray[6][2]);
    this.submitTableForm.get('six3').setValue(res.inputArray[6][3]);
    this.submitTableForm.get('six4').setValue(res.inputArray[6][4]);
    this.submitTableForm.get('six5').setValue(res.inputArray[6][5]);
    this.submitTableForm.get('six6').setValue(res.inputArray[6][6]);
    this.submitTableForm.get('six7').setValue(res.inputArray[6][7]);
    this.submitTableForm.get('six8').setValue(res.inputArray[6][8]);

    this.submitTableForm.get('seven0').setValue(res.inputArray[7][0]);
    this.submitTableForm.get('seven1').setValue(res.inputArray[7][1]);
    this.submitTableForm.get('seven2').setValue(res.inputArray[7][2]);
    this.submitTableForm.get('seven3').setValue(res.inputArray[7][3]);
    this.submitTableForm.get('seven4').setValue(res.inputArray[7][4]);
    this.submitTableForm.get('seven5').setValue(res.inputArray[7][5]);
    this.submitTableForm.get('seven6').setValue(res.inputArray[7][6]);
    this.submitTableForm.get('seven7').setValue(res.inputArray[7][7]);
    this.submitTableForm.get('seven8').setValue(res.inputArray[7][8]);

    this.submitTableForm.get('eight0').setValue(res.inputArray[8][0]);
    this.submitTableForm.get('eight1').setValue(res.inputArray[8][1]);
    this.submitTableForm.get('eight2').setValue(res.inputArray[8][2]);
    this.submitTableForm.get('eight3').setValue(res.inputArray[8][3]);
    this.submitTableForm.get('eight4').setValue(res.inputArray[8][4]);
    this.submitTableForm.get('eight5').setValue(res.inputArray[8][5]);
    this.submitTableForm.get('eight6').setValue(res.inputArray[8][6]);
    this.submitTableForm.get('eight7').setValue(res.inputArray[8][7]);
    this.submitTableForm.get('eight8').setValue(res.inputArray[8][8]);
   })
  
   console.log(this.submitTableForm['one1'])

  }

}
