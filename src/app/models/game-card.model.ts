export class GameCard {

  public arrayIndex: number;
  public imagen: string;
  public shown: boolean;
  public success: boolean;
  public error: boolean;

  constructor(arrayIndex: number, imagen: string) {
    this.arrayIndex = arrayIndex;
    this.imagen = imagen;
    this.shown = false;
    this.success = false;
    this.error = false;
  }

}
