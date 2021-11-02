import { dbContext } from '../db/DbContext'

class JobsService {
  async getAll(query) {
    const jobs = await dbContext.Jobs.find(query).populate('creator', 'name picture')
    return jobs
  }
}
export const jobsService = new JobsService()
