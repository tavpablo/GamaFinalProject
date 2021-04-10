import { Conta } from "./conta.model";

class Dashboard {
  constructor(
    public contaBanco: Conta,
    public contaCredito: Conta
  ){}
}

export {Dashboard}
