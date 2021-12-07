export interface CustomerModel {
  customerId: number;
  name: string;
  type: CustomerType;
}

export enum CustomerType {
  small = 0,
  large = 1
}
