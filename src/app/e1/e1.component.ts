import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { TestModel } from '../common/components/show-test/test.model';

import { NumbersService } from '../common/numbers.service';

@Component({
  selector: 'app-e1',
  templateUrl: './e1.component.html',
  styleUrls: ['./e1.component.scss'],
})
export class E1Component implements OnInit{
  problem = 'Sea p un número entero positivo, se dice que p es primo si y solo si la cantidad de divisores enteros positivos de p es 2 (1 y p), en caso contrario p es un número compuesto. Implemente una función que dado un número determine si es primo (La funcción retornará un valor boolean: true  false).';
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
      n: new FormControl(2 , [Validators.required, Validators.min(1)])
    });
  }

  private initializeTest(){
    this.testList = [
      new TestModel('Número primo pequeño', 41, true, false),
      new TestModel('Número compuesto pequeño', 8, false, false),      
      new TestModel('Número primo "grande"', 13009, true, false),   
      new TestModel('Número compuesto "grande"', 54243, false, false)        
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
        if (this.isPrime(n)){
          this.result = `${n} es un número primo`;
        } else {
          this.result = `${n} es un número compuesto`;
        }
      } catch (err){
        this.result = `ERRORRRRR: ${err}`;
      }
      this.isComputing = false;
    }, 2000);
    
  }

  private isPrime(n: number): boolean {
    if (n === 1){
      return false;
    }
    for (let divisor = 2; divisor < n; divisor++){
      if (n % divisor == 0){
        return false;
      }
    }
    return true;
  }

  test(){
    this.isTesting = true;
    setTimeout(()=> {
      this.testList.forEach(t => {
        try {
        if (this.isPrime(t.value) === t.rightAnwser) {
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
