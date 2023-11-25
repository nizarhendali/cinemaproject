import { Film } from "./film";
import { Salle } from "./salle";
import { Seance } from "./seance";
import { Ticket } from "./ticket";

export class Projection {
    id!:number;
    dateDeProjection!:String;
    salle!:Salle;
    prix!:number;
    tickets!:Ticket[];
    film!:Film;
    seance!:Seance;
}
