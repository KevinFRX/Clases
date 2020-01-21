import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { TestModel } from '../common/components/show-test/test.model';

import { NumbersService } from '../common/numbers.service';

@Component({
  selector: 'app-e0',
  templateUrl: './e0.component.html',
  styleUrls: ['./e0.component.scss'],
})
export class E0Component implements OnInit{
  problem = 'Saber si un año es bisiesto';
  dataForm: FormGroup;
  result: string;
  
  isTesting: boolean;
  isComputing: boolean;
  showTestResults: boolean;

  constructor(private readonly numbersService: NumbersService) {}

  public testList : TestModel[];

  ngOnInit(){
    this.initializeVariables();
    this.initializeFormGroup();
    this.initializeTest();   
    
  }

  private initializeVariables() {
    this.result = '';
    this.isComputing = false;
    this.isTesting = false;
    this.showTestResults = false;
  }

  private initializeFormGroup(){
    this.dataForm = new FormGroup({
      n: new FormControl(2 , [Validators.required, Validators.min(2)])
    });
  }

  private initializeTest(){
    this.testList = [
      new TestModel('Año bisiesto solo multiplo de 4', 2004, true, false),
      new TestModel('Año bisiesto multiplo de 400', 2000, true, false),      
      new TestModel('Año no bisiesto multiplo de 100', 1000, false, false),   
      new TestModel('Año no bisiesto no multiplo de 100', 2003, false, false),
      new TestModel('Año no bisiesto no multiplo de 4', 1995, false, false)         
    ];
  }
    
  compute(){
    if (this.dataForm.invalid) {
      return;
    }

    this.isComputing = true;
    setTimeout(() => {
      // Toma el número entrado del formulario
      const n = this.dataForm.get('n').value;    
      try {
        if (this.isLeapYear(n)){
          this.result = `${n} es un año bisiesto`;
        } else {
          this.result = `${n} no es un año bisiesto`;
        }
      } catch (err){
        this.result = `ERRORRRRR: ${err}`;
      }
      this.isComputing = false;
    }, 2000);
    
  }

  private isLeapYear(n: number): boolean {
    if (n % 4 > 0){
        return false;
    } else{
        if (n % 100 > 0){
            return true;
        } else{
            if (n % 400 > 0){
                return false;
            }else{
              return true;
            }
        }
    }
  }

  test(){
    this.isTesting = true;
    setTimeout(()=> {
      this.testList.forEach(t => {
        try {
        if (this.isLeapYear(t.value) === t.rightAnwser) {
          t.result = true;
        } else {
          t.result = false;
        }
        } catch (e) {
          t.result = false;
        }
      })
      this.isTesting = false; 
      this.showTestResults = true;
    }, 2000);    
  }  
}
