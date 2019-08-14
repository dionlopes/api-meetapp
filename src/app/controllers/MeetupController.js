import {
  isBefore,
  parseISO,
  startOfDay,
  endOfDay,
  format,
  startOfHour,
} from 'date-fns';

import * as Yup from 'yup';
import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    const where = {};
    const page = req.query.page || 1;

    if (req.query.date) {
      const searchDate = parseISO(req.query.date);

      where.date = {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      };
    }

    const meetups = await Meetup.findAll({
      where,
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
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      file_id: Yup.number().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title, description, location, date, file_id } = req.body;

    const hourStart = startOfHour(date);

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Meet date invalid' });
    }

    const formatedDate = format(date, "yyyy-MM-dd'T'HH:mm:ssxxx");

    const user_id = req.userId;

    const meetup = await Meetup.create({
      title,
      description,
      location,
      date: formatedDate,
      file_id,
      user_id,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      file_id: Yup.number().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.findByPk(req.params.id);

    if (meetup === null) {
      return res.status(401).json({ error: "Meetup doesn't exists" });
    }

    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    if (meetup.past) {
      return res.status(400).json({ error: "Can't update past meetups" });
    }

    const { title, description, location, date, file_id } = req.body;

    const hourStart = startOfHour(date);

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Meet date invalid' });
    }

    const formatedDate = format(date, "yyyy-MM-dd'T'HH:mm:ssxxx");

    await meetup.update({
      title,
      description,
      location,
      date: formatedDate,
      file_id,
      user_id,
    });

    return res.json(meetup);
  }

  async delete(req, res) {
    const user_id = req.userId;

    const meetup = await Meetup.findByPk(req.params.id);

    if (meetup === null) {
      return res.status(401).json({ error: "Meetup doesn't exists" });
    }

    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    await meetup.destroy();

    return res.send();
  }
}

export default new MeetupController();
