import { Controller, Get, Param } from '@nestjs/common';
import { JuegosService } from './juegos.service';

@Controller('juegos')
export class JuegosController {
  constructor(
    private readonly juegosService: JuegosService,
  ) {}

  @Get()
  findAll() {
    return this.juegosService.findAll();
  }
}