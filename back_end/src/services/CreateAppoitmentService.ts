import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appoitment from '../models/Appoitment';
import AppoitmentRepository from '../repositories/AppoitmentRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider }: Request): Promise<Appoitment> {
    const appoitmentRepository = getCustomRepository(AppoitmentRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDade = await appoitmentRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDade) {
      throw Error('This recipe is already booked');
    }

    const appoitment = appoitmentRepository.create({
      provider,
      date: appointmentDate,
    });

    await appoitmentRepository.save(appoitment);

    return appoitment;
  }
}

export default CreateAppointmentService;
