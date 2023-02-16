export interface IProduit {

    id:number;
    nom:string;
    prix:number;
    fabriquant:string;
    rabais?:boolean; // peut y avoir un propriete rabais ou pas. optionelle avec le ?
    estEditable?:boolean

}
