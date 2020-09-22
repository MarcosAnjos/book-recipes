import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppoitmentRepository from '../repositories/AppoitmentRepository';
import CreateAppoitmentService from '../services/CreateAppoitmentService';

const appoitmentRouter = Router();

appoitmentRouter.get('/', (request, response) => {
  const appoitmentRepository = getCustomRepository(AppoitmentRepository);
  const appoitment = appoitmentRepository.find();

  return response.json(appoitment);
});

appoitmentRouter.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppoitment = new CreateAppoitmentService();

    const appoitment = await createAppoitment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appoitment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appoitmentRouter;
