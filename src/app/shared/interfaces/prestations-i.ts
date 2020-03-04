import { State } from '../enums/state.enum';

export interface PrestationsI {
    id: number;
    typePresta: string;
    client: string;
    tjmHt: number;
    nbJours: number;
    tva: number;
    state: State;
    comment: string;
    totalHt(): number;
    totalTtc(): number;
}
