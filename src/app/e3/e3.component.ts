import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { TestModel } from '../common/components/show-test/test.model';
import { NumbersService } from '../common/numbers.service';


@Component({
  selector: 'app-e3',
  templateUrl: './e3.component.html',
  styleUrls: ['./e3.component.scss'],
})
export class E3Component implements OnInit{
  problem: string;
  dataForm: FormGroup;
  result: string;
  
  isTesting: boolean;
  isComputing: boolean;
  showTestResults: boolean;

  public testList : TestModel[];

  constructor(private readonly numbersService: NumbersService){}

  ngOnInit(){
    this.initializeVariables();
    this.initializeFormGroup();
    this.initializeTest();
    
    
  }

  private initializeVariables() {
    this.problem = 'Implemente una función que determine si dos números son primos relativos (el único divisor en comun que tienen es el 1)';
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
      new TestModel('Probando con dos números primos', [41, 13], true, false),
      new TestModel('Probando con un primo y un compuesto - No primos realtivos', [3, 18], false, false),      
      new TestModel('Probando con un primo y un compuesto - Primos relativos', [5, 14], true, false),      
      new TestModel('Probando con dos números compuestos - No primos relativos', [12, 18], false, false),      
      new TestModel('Probando con dos números compuestos - Primos relativos', [24, 35], true, false),   
      new TestModel('Probando con dos números primos iguales - Primos relativos', [7, 7], false, false),      
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
        if (this.arePrimeRelative(n1, n2)){
          this.result = `${n1} y ${n2} son primos relativos`;
        } else {
          this.result = `${n1} y ${n2} no son primos relativos`;
        }
      } catch (err){
        this.result = `ERROR: ${err}`;
      }
      this.isComputing = false;
    }, 2000);
    
  }

  private arePrimeRelative(n1: number, n2: number): boolean {
    return true;
  }

  test(){
    this.isTesting = true;
    setTimeout(()=> {
      this.testList.forEach(t => {
        try {
          if (this.arePrimeRelative(t.value[0], t.value[1]) === t.rightAnwser) {
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
