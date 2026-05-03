const express = require("express");
const router = express.Router();
const { Students, Teachers } = require("../models");

router.get("/students", async (req, res, next) => {
  try {
    const students = await Students.findAll({
      include: [{ model: Teachers, as: "teacher" }],
      order: [["id", "ASC"]],
    });

    res.json(students);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/demo", async (req, res, next) => {
  try {
    const [studentsCount, teachersCount] = await Promise.all([
      Students.count(),
      Teachers.count(),
    ]);

    res.json({
      message: "Public demo endpoint is working",
      counts: {
        students: studentsCount,
        teachers: teachersCount,
      },
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
