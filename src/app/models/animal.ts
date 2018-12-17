import { Marking } from './marking';

export interface  Animal {
    Name: string;
    Specie: string;
    Sex: string;
    BirthDate?: Date;
    Breed?: string;
    Color?: string;
    Allergies?: string;
    IsSterilized?: boolean;
    SterilizedDate?: Date;
    Marking?: Marking;
}
