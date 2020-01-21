import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { TestModel } from '../common/components/show-test/test.model';
import { NumbersService } from '../common/numbers.service';

@Component({
 selector: 'app-e2',
  templateUrl: './e2.component.html',
  styleUrls: ['./e2.component.scss'],
})
export class E2Component implements OnInit{

  constructor(private readonly numbersService: NumbersService) {}

  problem = 'Implemente una función que dado un número entero positivo calcule la cantidad de divisores enteros positivos que tiene.';
  dataForm: FormGroup;
  result: string;
  
  isTesting: boolean;
  isComputing: boolean;
  showTestResults: boolean;

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
      new TestModel('Probando número primo', 41, 2, false),
      new TestModel('Probando número con "bastantes" divisores', 54243, 24, false),       
      new TestModel('Probando caso particular', 1, 1, false),            
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
        const amount = this.computeAmountOfDivisors(n);
        if(amount === 1) {
          this.result = `${n} tiene un divisor`;
        } else {
          this.result = `${n} tiene ${amount} divisores`;
        }
      } catch (err){
        this.result = `ERROR: ${err}`;
      }
      this.isComputing = false;
    }, 2000);
    
  }

  private computeAmountOfDivisors(n: number): number {
    let resultado = 0;

   for (let divisor = 1; divisor <= n; divisor++){
     if (n % divisor == 0){
     resultado++;
     }
   }
   return resultado;
  }

  test(){
    this.isTesting = true;
    setTimeout(()=> {
      this.testList.forEach(t => {
        try {
          if (this.computeAmountOfDivisors(t.value) === t.rightAnwser) {
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
