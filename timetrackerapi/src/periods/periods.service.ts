import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';

@Injectable()
export class PeriodsService {
  constructor(private prisma: PrismaService) {}
  create(createPeriodDto: CreatePeriodDto) {
    return this.prisma.periods.create({ data: createPeriodDto });
  }

  findAll() {
    return this.prisma.periods.findMany({orderBy:{id:'desc'}});

  }

  findOne(id: number) {
    return `This action returns a #${id} period`;
  }

  update(id: number, updatePeriodDto: UpdatePeriodDto) {
    return this.prisma.periods.update({
      data: updatePeriodDto,
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.prisma.periods.delete({
      where: { id: id },
    });
   }
}
