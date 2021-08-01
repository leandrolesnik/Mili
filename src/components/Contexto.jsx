import React, {useState, createContext} from "react";
import Header from "./Header";
import Home from "./Home";

export const Banco = createContext();

export default function Contexto(){

  const [cliente, setCliente] = useState({
    Nome: "Leandro",
    Agencia: "2395-9",
    Conta: "1250-8",
    Saldo: 300.000000,
  });

  return(
    <Banco.Provider value={{cliente, setCliente}}>
      <Header />
      <Home />
    </Banco.Provider>
  );
}