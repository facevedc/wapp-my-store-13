export class Store {
    instagram: string
    banner: string[]
    contacto: number
    direccionFisica: string
    email: string
    entregasLocal: boolean
    entregasPorAcordar: boolean

    constructor(
        instagram: string = '', 
        banner: string[] = [], 
        contacto: number = 0,
        direccionFisica: string = '',
        email: string = '',
        entregasLocal: boolean = false,
        entregasPorAcordar: boolean = false
        ) {
            this.instagram = instagram;
            this.banner = banner;
            this.contacto = contacto;
            this.direccionFisica = direccionFisica;
            this.email = email;
            this.entregasLocal = entregasLocal;
            this.entregasPorAcordar = entregasPorAcordar;
    }
}