export interface IProduit {

    id:Number;
    nom:String;
    prix:Number;
    fabriquant:String;
    rabais?:Boolean; // peut y avoir un propriete rabais ou pas. optionelle avec le ?

}
