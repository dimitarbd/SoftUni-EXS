const { CourseBook } = require('../models/CourseBook');
const { User } = require('../models/User');


exports.getOne = (courseId) => CourseBook.findById(courseId);

exports.getOneDetailed = (courseId) => this.getOne(courseId).populate('owner').populate('signUpList');