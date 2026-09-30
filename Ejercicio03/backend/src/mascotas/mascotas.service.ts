import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
    private readonly mascotas = [
        { id: 1, nombre: 'Buddy', especie: 'Perro' },
        { id: 2, nombre: 'Whiskers', especie: 'Gato' },
        { id: 3, nombre: 'Nemo', especie: 'Pez' }
    ];

    findOne(id: number | string) {
        const mascotaId = Number(id);
        const mascota = this.mascotas.find((item) => item.id === mascotaId);
        return mascota;
    }
}
