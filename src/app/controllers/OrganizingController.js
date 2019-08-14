import Meetup from '../models/Meetup';

import User from '../models/User';
import File from '../models/File';

class OrganizingController {
  async index(req, res) {
    const page = req.query.page || 1;

    const meetups = await Meetup.findAll({
      where: { user_id: req.userId },
      attributes: ['id', 'title', 'description', 'location', 'date'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'url', 'name', 'path'],
        },
      ],
      limit: 10,
      offset: 10 * page - 10,
      order: ['date'],
    });

    return res.json(meetups);
  }
}

export default new OrganizingController();
