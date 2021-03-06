import { EntityRepository, Repository } from 'typeorm';
import Appoitment from '../models/Appoitment';

@EntityRepository(Appoitment)
class AppoitmentRepository extends Repository<Appoitment> {
  public async findByDate(date: Date): Promise<Appoitment | null> {
    const findAppoitment = await this.findOne({
      where: { date: date },
    });

    return findAppoitment || null;
  }
}

export default AppoitmentRepository;
