import { jobsService } from '../services/JobsService'
import BaseController from '../utils/BaseController'

export class JobsContorller extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getAll)
  }

  async getAll(req, res, next) {
    try {
      const query = req.query
      const jobs = await jobsService.getAll(query)
      return res.send(jobs)
    } catch (error) {
      next(error)
    }
  }
}
