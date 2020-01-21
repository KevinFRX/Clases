import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { TestModel } from '../common/components/show-test/test.model';
import { NumbersService } from '../common/numbers.service';
@Component({
  selector: 'app-e5',
  templateUrl: './e5.component.html',
  styleUrls: ['./e5.component.scss'],
})
export class E5Component implements OnInit{
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
    this.problem = 'Implemente una función que calcule el mínimo común múltiplo (mcm) de dos números'
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
      new TestModel('Probando con dos números primos relativos', [9, 20], 180, false),
      new TestModel('Probando con un número y un multiplo de él ', [24, 6], 24, false),      
      new TestModel('Probando con dos números no primos relativos', [12, 8], 24, false),      
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
        const mcm = this.computeMCM(n1, n2);
        this.result = `El MCM(${n1},${n2}) = ${mcm}.`;
      } catch (err){
        this.result = `ERROR: ${err}`;
      }
      this.isComputing = false;
    }, 2000);
    
  }

  private computeMCM(n1: number, n2: number): number {
    return 0;
  }

  test(){
    this.isTesting = true;
    setTimeout(()=> {
      this.testList.forEach(t => {
        try {
          if (this.computeMCM(t.value[0], t.value[1]) === t.rightAnwser) {
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
