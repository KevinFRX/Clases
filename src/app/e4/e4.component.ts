import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { TestModel } from '../common/components/show-test/test.model';

import { NumbersService } from '../common/numbers.service';

@Component({
  selector: 'app-e4',
  templateUrl: './e4.component.html',
  styleUrls: ['./e4.component.scss'],
})
export class E4Component implements OnInit{
  problem: string;
  dataForm: FormGroup;
  result: string;
  
  isTesting: boolean;
  isComputing: boolean;
  showTestResults: boolean;

  public testList : TestModel[];

constructor(private readonly numbersService: NumbersService) {}
  ngOnInit(){
    this.initializeVariables();
    this.initializeFormGroup();
    this.initializeTest();
    
    
  }

  private initializeVariables() {
    this.problem = 'Implemente una función que calcule el máximo común divisor (mcd) de dos números'
    this.result = '';
    this.isComputing = false;
    this.isTesting = false;
    this.showTestResults = false;
  }

  private initializeFormGroup(){
    this.dataForm = new FormGroup({
      n1: new FormControl(2 , [Validators.required, Validators.min(1)]),
      n2: new FormControl(2 , [Validators.required, Validators.min(1)])
    });
  }

  private initializeTest(){
    this.testList = [
      new TestModel('Probando con dos números primos relativos', [35, 24], 1, false),
      new TestModel('Probando con un número y un divisor ', [24, 6], 6, false),      
      new TestModel('Probando con dos números con mas de un divisor comun', [24, 36], 12, false),      
      new TestModel('Probando con dos números iguales', [12, 12], 12, false),            
    ];
  }
    
  compute(){
    if (this.dataForm.invalid) {
      return;
    }

    this.isComputing = true;
    setTimeout(() => {
      // Toma el número entrado del formulario
      const n1 = this.dataForm.get('n1').value;    
      const n2 = this.dataForm.get('n2').value;    
      try {
        const mcd = this.computeMCD(n1, n2);
        this.result = `El MCD(${n1},${n2}) = ${mcd}.`;
      } catch (err){
        this.result = `ERROR: ${err}`;
      }
      this.isComputing = false;
    }, 2000);
    
  }

  private computeMCD(n1: number, n2: number): number {
    return 0;
  }

  test(){
    this.isTesting = true;
    setTimeout(()=> {
      this.testList.forEach(t => {
        try {
          if (this.computeMCD(t.value[0], t.value[1]) === t.rightAnwser) {
            t.result = true;
          } else {
            t.result = false;
          }
        } catch(e){
          t.result = false;
        }
      })
      this.isTesting = false; 
      this.showTestResults = true;
    }, 2000);    
  }  
}
