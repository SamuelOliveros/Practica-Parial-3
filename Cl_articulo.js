export default class Cl_Clase{
constructor(codigo,tipo,nombre,precio){
    this.codigo=codigo;
    this.tipo=tipo;
    this.nombre=nombre;
    this.precio=precio;
}
set codigo(c){
    this._codigo=+c;
}
get codigo(){
    return this._codigo;
}
set tipo(t){
    this._tipo=+t;
}
get tipo(){
return this._tipo;
} 
set nombre(n){
    this._nombre=n;
}
get nombre(){
    return this._nombre;
}
set precio(p){
    this._precio=+p;
}
get precio(){
   return this._precio;
}
Precio(){
    if (this.tipo ==1)
        return this.precio + (this.precio*(20/100)) 
    else{
        return this.precio + (this.precio*(10/100))
    }
}
PrecioCant(){
    return (this.precio + (this.precio*(5/100)))*3
}


}