import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { TestModel } from '../common/components/show-test/test.model';
import { NumbersService } from '../common/numbers.service';

@Component({
  selector: 'app-e6',
  templateUrl: './e6.component.html',
  styleUrls: ['./e6.component.scss'],
})
export class E6Component implements OnInit{
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
    this.problem = 'Dado un número n y un número primo p, implemente una función que determine la pontecia de p en la descomposición en primos de n. Por ejemplo: n = 24, p = 2 debe devolver 3 ya que 24 = 2³*3';
    this.result = '';
    this.isComputing = false;
    this.isTesting = false;
    this.showTestResults = false;
  }

  private initializeFormGroup(){
    this.dataForm = new FormGroup({
      n: new FormControl(2 , [Validators.required, Validators.min(1)]),
      p: new FormControl(2 , [Validators.required, Validators.min(1)])
    });
  }

  private initializeTest(){
    this.testList = [
      new TestModel('Probando con un primo que no divide al número', [24, 7], 0, false),
      new TestModel('Probando con un primo que divide al número ', [36, 3], 2, false),      
      new TestModel('Probando cuando el número n es primo', [37, 3], 0, false),
      new TestModel('Probando dos números iguales(primos)', [37, 37], 1, false),
      new TestModel('Probando números grandes', [4455, 11], 1, false)
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
      const p = this.dataForm.get('p').value;    
      try {
        const fac = this.computeFAC(n, p);
        this.result = `La potencia en ${n} del primo ${p} es ${fac}.`;
      } catch (err){
        this.result = `ERROR: ${err}`;
      }
      this.isComputing = false;
    }, 2000);
    
  }

  private computeFAC(n: number, p: number): number {
    return 0;
  }

  test(){
    this.isTesting = true;
    setTimeout(()=> {
      this.testList.forEach(t => {
        try {
          if (this.computeFAC(t.value[0], t.value[1]) === t.rightAnwser) {
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
