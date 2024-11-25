import Cl_Clase from "./Cl_articulo.js";
export default class Cl_Market{
    constructor(){
        this.cliente = [];
    }

AgregarCliente(clien){
    this.cliente.push(clien);
}
producto(){
   return this.cliente
}
preciodetal(){
     return this.cliente.map(clien => clien.Precio()) 
    
    };
    TotalDetal(){
        let acum=0;
        this.cliente.forEach((clien)=>{
          acum+=clien.Precio() 
        })
    return acum;
    }
    preciomayor(){
        return this.cliente.map(clien=>clien.PrecioCant());
    }
    TotalMayor(){
        let acum_m = 0;
        this.cliente.forEach((clien)=>{
            acum_m += clien.PrecioCant();
        })
        return acum_m;
    }




}
