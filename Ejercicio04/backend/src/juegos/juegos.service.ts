import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
    private readonly juegos = [
        { id: 1, nombre: 'Ajedrez', tipo: 'Estrategia' },
        { id: 2, nombre: 'Fútbol', tipo: 'Deporte' },
        { id: 3, nombre: 'Mario Kart', tipo: 'Carreras' }
    ];

    findAll(tipo?: string) {
        if (!tipo) return this.juegos;
        return this.juegos.filter((juego) => juego.tipo === tipo);
    }
}