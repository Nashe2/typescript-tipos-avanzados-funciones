let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

//Con any si muestra datos en la impresion
anyVar.doSomething();
anyVar.touppercase();

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

/* Al usar unknowVar existen restricciones para trabajar con variables que no sabemos su tipo, por lo tanto
no imprime, asi que usamos un if y el typeof para hacer la comparacion, llamamos el unknow type y el metodo
que corresponde segun su tipo */
// unknowVar.doSomething();
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}
if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
