const banco = {
    cuentas: new Map(),
    depositar(numeroCuenta, monto) {
        const saldoActual = this.cuentas.get(numeroCuenta) || 0;
        this.cuentas.set(numeroCuenta, saldoActual + parseFloat(monto));
        return true;
    },
    retirar(numeroCuenta, monto) {
        const saldoActual = this.cuentas.get(numeroCuenta) || 0;
        this.cuentas.set(numeroCuenta, saldoActual - parseFloat(monto));
        return true;
    },
    consultarSaldo(numeroCuenta) {
        return this.cuentas.get(numeroCuenta) || 0.0;
    }
};

new Vue({
    el: '#app',
    data: {
        numeroCuenta: 0,
        monto: '',
        mensaje: '',
    },
    methods: {
        depositar() {
            banco.depositar(this.numeroCuenta, this.monto);
            this.mensaje = 'Depósito exitoso.';
        },
        retirar() {
            banco.retirar(this.numeroCuenta, this.monto);
            this.mensaje = 'Retiro exitoso.';
        },
        consultarSaldo() {
            const saldo = banco.consultarSaldo(this.numeroCuenta);
            this.mensaje = `Saldo actual: ${saldo}`;
        },
    },
});
