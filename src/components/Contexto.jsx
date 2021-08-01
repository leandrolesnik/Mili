import React, {useState, createContext} from "react";
import Home from "./Home";

export const Banco = createContext();

export default function Contexto({navigation}){

  const [cliente, setCliente] = useState({
    Nome: "Leandro",
    Agencia: "2395-9",
    Conta: "1250-8",
    Saldo: "300.000,00",
  });
 console.log(cliente);
  return(
    <Banco.Provider value={{cliente, setCliente}}>
      <Home />
    </Banco.Provider>
  );
}