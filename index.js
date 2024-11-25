import Cl_Clase from "./Cl_articulo.js";
import Cl_Market from "./Cl_Market.js";
import Dt_art from "./Data.js";

let market = new Cl_Market();
Dt_art.forEach((clien) =>
    market.AgregarCliente( new Cl_Clase(clien.codigo,clien.tipo,clien.nombre,clien.precio))
);
alert(`Productos:${JSON.stringify(market.producto())}`);
alert(`Precios al detal : ${JSON.stringify(market.preciodetal())}`);
alert(`Total al detal:${JSON.stringify(market.TotalDetal())}`);
alert(`Precios al mayor:${JSON.stringify(market.preciomayor())}`);
alert(`Total al mayor:${JSON.stringify(market.TotalMayor())}`);