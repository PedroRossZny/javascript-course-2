class Notificador {
    enviar(msg) {}
}

class EmailNotificador extends Notificador {
    enviar() {console.log("Email recebido!")}
}

class SMSNotificador extends Notificador {
    enviar() {console.log("SMS recebido!")}
}

class PushNotificador extends Notificador {
    enviar() {console.log("Push recebido!")}
}

const notificacoes = [new EmailNotificador(), new SMSNotificador(), new PushNotificador()]
notificacoes.forEach(n => n.enviar())