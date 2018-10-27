import { Address } from '../General/Address';
import { Farmer } from '../persons/Farmer';
import { Investor } from '../persons/Investor';

export class Products {
  _id: String;
  productName: String;
  farmer: Farmer;
  investors: Array<Investor>;
  documentNumber: String;
  address: Address;
  productDetails: String;
  minimumProfitability: Number;
  maximumProfitability: Number;
  returnTime: Number;
  totalInvestment: Number;
  minimumInvestment: Number;
}
