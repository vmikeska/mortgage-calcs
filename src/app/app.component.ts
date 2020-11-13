import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public ngOnInit() {
    let start1 = moment(this.start1);
    this.debt1.calc(this.amount1, start1, this.interest1, this.payment1);

    let start2 = moment(this.start2);
    this.debt2.calc(this.amount2, start2, this.interest2, this.payment2);

  }

  title = 'app';

  public debt1 = new Calculate();
  public debt2 = new Calculate();

  public amount1 = 8100000;
  public start1 = '1.6.2020';
  public interest1 = 2.79;
  public payment1 = 33000;


  public amount2 = 1800000;
  public start2 = '1.6.2020';
  public interest2 = 3.0;
  public payment2 = 10800;

  public valueIncrease = 1;
  public propertyValue = 9500000;

}

export class CalculateValue {

  public calc(monthsCount: number, percent: number, initialValue: number) {

    let currentValue = initialValue;

    let monthlyPercents = percent / 12;

    for (let monthNo = 1; monthNo <= monthsCount; monthNo++) {

      let monthlyRise = (currentValue / 100) * monthlyPercents;

      currentValue += monthlyRise;
  



    }
  }
}

//let startDate = moment().
export class Calculate {

  public items: MonthItem[] = [];

  public calc(amount: number, start1: moment.Moment, interest: number, payment: number) {

    let monthlyInterest = interest / 12;

    let remainingDebt = amount;

    let no = 1;

    while (remainingDebt > 0) {

      let interestPayment = Math.floor((remainingDebt / 100) * monthlyInterest);
      let basePayment = payment - interestPayment;
      let newDebt = remainingDebt - basePayment;

      let newDate = start1.clone().add(1, 'm');

      let currentItem: MonthItem = {
        no,
        amount: newDebt,
        month: newDate.month(),
        year: newDate.year(),
        basePayment,
        interestPayment
      };

      remainingDebt = newDebt;
      no++;

      this.items.push(currentItem);
    }

  }
}

export interface MonthItem {
  no: number;
  month: number;
  year: number;
  amount: number;
  interestPayment: number;
  basePayment: number
}

export interface RiseItem {
  no: number;
  
}


