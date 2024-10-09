export default class Cl_Personas{
    constructor(n,s,i){
        this.nombre=n;
        this.sexo=s;
        this.ingreso=i;
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    set sexo(s){
        this._sexo=s;
    }
    get sexo(){
        return this._sexo;
    }
    set ingreso(i){
        this._ingreso=+i;
    }
    get ingreso(){
        return this._ingreso;
    }
    
}
