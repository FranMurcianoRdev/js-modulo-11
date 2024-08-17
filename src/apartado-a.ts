const estaBienFormadoIBAN = (iban: string): boolean => {
    const patron = /^[A-Z]{2}\d{2}([\s\-]?\d{4}){2}([\s\-]?\d{2})([\s\-]?\d{10})$/;

    return patron.test(iban);
};

console.log(estaBienFormadoIBAN("ES21 1465 0100 72 2030876293")); 
console.log(estaBienFormadoIBAN("ES2114650100722030876293"));      
console.log(estaBienFormadoIBAN("ES21-1465-0100-72-2030876293"));  
console.log(estaBienFormadoIBAN("ES6621000418401234567891"));      


const extraerInformacionIBAN = (iban: string): { codigoBanco: string | null, digitoControl: string | null, numeroDeCuenta: string | null, digitoControl2: string | null, codigoSucursal: string | null }  => {
    const patron = /^([A-Z]{2}(?<digitoControl>\d{2})(\s|\-)?(?<codigoBanco>\d{4})(\s|\-)?(?<codigoSucursal>\d{4})(\s|\-)?(?<digitoControl2>\d{2})(\s|\-)?(?<numeroDeCuenta>\d{10}))$/;

    const coincidencia = patron.exec(iban);

    
    if (coincidencia && coincidencia.groups) {
        return {
            codigoBanco: coincidencia.groups.codigoBanco ?? null,
            digitoControl: coincidencia.groups.digitoControl ?? null,
            numeroDeCuenta: coincidencia.groups.numeroDeCuenta ?? null,
            digitoControl2: coincidencia.groups.digitoControl2 ?? null,
            codigoSucursal: coincidencia.groups.codigoSucursal ?? null

        };
    } else {
        return {
            codigoBanco: null,
            digitoControl: null,
            numeroDeCuenta: null,
            digitoControl2: null,
            codigoSucursal: null
        };
    }
};

console.log(extraerInformacionIBAN("ES21 1465 0100 72 2030876293"));
console.log(extraerInformacionIBAN("ES2114650100722030876293"));      
console.log(extraerInformacionIBAN("ES21-1465-0100-72-2030876293"));  
console.log(extraerInformacionIBAN("ES6621000418401234567891"));      


// Definir la tabla de códigos bancarios
const bancos: { [codigo: string]: string } = {
    "2080": "Abanca Corporación Bancaria",
    "0061": "Banca March",
    "0188": "Banco Alcalá",
    "0182": "Banco Bilbao Vizcaya Argentaria",
    "0130": "Banco Caixa Geral",
    "0234": "Banco Caminos",
    "2105": "Banco Castilla-La Mancha",
    "0240": "Banco de Crédito Social Cooperativo",
    "0081": "Banco de Sabadell",
    "0487": "Banco Mare Nostrum",
    "0186": "Banco Mediolanum",
    "0238": "Banco Pastor",
    "0075": "Banco Popular Español",
    "0049": "Banco Santander",
    "3873": "Banco Santander Totta",
    "2038": "Bankia",
    "0128": "Bankinter",
    "0138": "Bankoa",
    "0152": "Barclays Bank PLC",
    "3842": "BNP Paribas Paris",
    "3025": "Caixa de Credit del Enginyers",
    "2100": "Caixabank",
    "2045": "Caja de Ahorros y Monte de Piedad de Ontinyent",
    "3035": "Caja Laboral Popular CC",
    "3081": "Caja Rural Castilla-La Mancha",
    "3058": "Cajamar Caja Rural",
    "2000": "Cecabank",
    "1474": "Citibank Europe PLC",
    "3821": "Commerzbank AG",
    "3877": "Danske Bank A/S",
    "0019": "Deutsche Bank SAE",
    "0239": "EVO Banco",
    "2085": "Ibercaja Banco",
    "1465": "ING Bank NV",
    "2095": "Kutxabank",
    "2048": "Liberbank",
    "0131": "Novo Banco",
    "0073": "Open Bank",
    "0108": "Société Générale",
    "2103": "Unicaja Banco"
};

// Función para obtener el nombre del banco usando el código
const obtenerNombreBanco = (iban: string): string => {
    const info = extraerInformacionIBAN(iban);
    const codigoBanco = info.codigoBanco;
    
    if (codigoBanco && bancos[codigoBanco]) {
        return bancos[codigoBanco];
    }
    return "Código de banco no encontrado";
};

console.log(obtenerNombreBanco("ES21 1465 0100 72 2030876293")); 
console.log(obtenerNombreBanco("ES2114650100722030876293"));  
console.log(obtenerNombreBanco("ES21-1465-0100-72-2030876293")); 
console.log(obtenerNombreBanco("ES6621000418401234567891"));   