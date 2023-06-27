const Breakdowns = require("../model/breakdown");

const problems = [
  {
    id: 1,
    name: "Sensors",
  },
  {
    id: 2,
    name: "Fall Objects",
  },
  {
    id: 3,
    name: "Bom 1",
  },
  {
    id: 4,
    name: "Jig Chuck Fault",
  },
  {
    id: 5,
    name: "Belt Broken",
  },
  {
    id: 6,
    name: "Daimeter Over size",
  },
  {
    id: 7,
    name: "Daimeter Out +NG",
  },
  {
    id: 8,
    name: "Alarm 120",
  },
  {
    id: 9,
    name: "Alarm 121",
  },
  {
    id: 10,
    name: "Alarm 179",
  },
  {
    id: 11,
    name: "Alarm 142",
  },
  {
    id: 12,
    name: "Alarm 42",
  },
  {
    id: 13,
    name: "Grind Data",
  },
  {
    id: 14,
    name: "Alarm 197",
  },
  {
    id: 15,
    name: "Alarm 157",
  },
  {
    id: 16,
    name: "Alarm 173",
  },
  {
    id: 17,
    name: "Bom 2",
  },
  {
    id: 18,
    name: "Alarm 29",
  },
  {
    id: 19,
    name: "Alarm 122",
  },
  {
    id: 20,
    name: "Gauge Amp fault",
  },
  {
    id: 21,
    name: "Alarm 159",
  },
  {
    id: 22,
    name: "Alarm 127",
  },
  {
    id: 23,
    name: "Alarm 017",
  },
  {
    id: 24,
    name: "Part fault",
  },
  {
    id: 25,
    name: "jig clamp",
  },
  {
    id: 26,
    name: "dress",
  },
  {
    id: 27,
    name: "cipper",
  },
  {
    id: 28,
    name: "Human error",
  },
];

exports.index = async (req, res, next) => {
  const breakdown = await Breakdowns.find();

  res.status(200).json({
    data: breakdown,
  });
};

exports.insert = async (req, res, next) => {
  const { machine, problem_id, problem_detail, start_date, end_date } =
    req.body;

  const problem_name = problems.find((p) => p.id === problem_id).name;

  const breakdown = new Breakdowns({
    machine,
    problem_type: {
      problem_id,
      problem_name,
    },
    problem_detail,
    start_date,
    end_date,
  });

  await breakdown.save();

  res.status(200).json({
    data: breakdown,
    message: "add  successfully",
  });
};
