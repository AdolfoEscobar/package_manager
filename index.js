const log4js = require('log4js');

const logger = log4js.getLogger("app");
logger.level = "info";

logger.debug("Iniciando al app en modo pruebas.");
logger.info("Usuario ha iniciado sesion")
logger.warn("Falta el archivo config de la app");
logger.error("No se pudo ejecutar la accion.");
logger.fatal("No se pudo iniciar la app,");

function sumar(x,y){
    return x+y;
}

const fds_fsf = 32;

module.exports = sumar;


