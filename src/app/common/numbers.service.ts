import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  /*
  * Calcula el número de divisores
  */
  computeDivisors(n : number): number {
    let cantDivisores = 0;
    for(let i = 1; i <= n; i++ ){
      if ( n%i === 0 ){
        cantDivisores++;
      }
    }
    return cantDivisores;
  }

  isPrime(n: number): boolean {
    return (this.computeDivisors(n) === 2);
  }

  // isPrime(n: number): boolean {
  //   if (n === 1){
  //     return false;
  //   }

  //   let primo: boolean = true;
  //   let i = 2;
  //   while (primo && i < n) {
  //     if( n % i === 0){
  //       primo = false;
  //     }
  //     i++;
  //   }
  //   return primo;
  // }
  
  areRelativePrime(n1: number, n2: number): boolean{
    // let sonPrimosRelativos: boolean = true;
    // let i = 2;
    // const min = this.computeMinimum(n1, n2);
    // while (sonPrimosRelativos && i <= min) {
    //   if( n1 % i === 0 && n2 % i === 0){
    //     sonPrimosRelativos = false;
    //   }
    //   i++;
    // }
    // return sonPrimosRelativos;

    return (this.computeMCD(n1, n2) === 1);
  }

  computeMinimum(n1: number, n2: number): number {
    return (n1 < n2)? n1: n2;
  }
  //  computeMinimum(n1: number, n2: number): number {
  //   if (n1 > n2) {
  //     return n2
  //   } else {
  //     return n1;
  //   }
  // }

  computeMaximum(n1: number, n2: number): number {
    return (n1 > n2)? n1: n2;
  }

  computeMCD(n1: number, n2: number): number {
    let mcd = 1
    const min = this.computeMinimum(n1, n2);
    for( let i = 2; i <= min; i++ ){
      if( n1 % i === 0 && n2 % i === 0){
        mcd = i;
      }
    }
    return mcd;
  }

  computeMCM(n1: number, n2: number): number {
    return  (n1 * n2) / this.computeMCD(n1, n2);
  }

  // computeMCM(n1: number, n2: number): number {
  //   let i = 1;
  //   const max = this.computeMaximum(n1, n2);
  //   const min = this.computeMinimum(n1, n2);
  //   while ( i < min && (max * i) % min !== 0 ) {
  //     i++;
  //   }    
  //   return max*i;
  // }

  computeFAC(n: number, p: number): number {
    let fac = 0;    
    while(n % p === 0) {
      n = n / p;
      fac++;
    }
    return fac;
  }

  computeFAC_R(n: number, p: number): number {
    if(n % p !== 0 ) { 
      return 0;
    }
    return this.computeFAC(n/p, p) + 1;
  }
}



