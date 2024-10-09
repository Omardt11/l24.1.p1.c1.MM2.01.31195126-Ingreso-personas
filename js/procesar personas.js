export default class Cl_procesar_personas{
    constructor(){
        this.contpersonas=0;
        this.contmujeres=0;
        this.acumingresomujeres=0;
        this.mayoringreso=0;
        this.nombremayoringreso=0;
    }
    procesar(p){
        this.contpersonas++;
        if(p.sexo=="F"){
            this.contmujeres++;
            this.acumingresomujeres+=p.ingreso;
        }
        if (p.ingreso>=this.mayoringreso) {
            this.mayoringreso=p.ingreso;
            this.nombremayoringreso=p.nombre;
        }
    }
    promedioingresomujeres(){
        return this.acumingresomujeres/this.contmujeres;
    }
}
