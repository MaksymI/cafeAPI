import { Table } from './table';
import { Location } from './location';

export class Cafe {
    _id: string;
    location: Location;
    name: string;
    rating: number;
    address: string;
    tables: Table [];
}
