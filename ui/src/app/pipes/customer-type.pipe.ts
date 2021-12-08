import { Pipe, PipeTransform } from '@angular/core';
import { CustomerType } from '../models/customer.model';

@Pipe({
  name: 'customerType'
})
export class CustomerTypePipe implements PipeTransform {

  transform(customerType : CustomerType): any {
    switch(customerType) {
      case CustomerType.small:
        return "Small";
      case CustomerType.large:
        return "Large";
    }
  }
}
