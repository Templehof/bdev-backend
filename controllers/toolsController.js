const Tool = require("../models/tool-model");

const getAllTools = async (req, res, next) => {
  let tools;

  try {
    tools = await Tool.find();
  } catch (error) {
    return next(error);
  }

  res.status(200).json({
    status: "success",
    results: tools.length,
    data: {
      tools: tools,
    },
  });
};

const getToolsbyCat = async (req, res, next) => {
  let tools;
  try {
    tools = await Tool.find({ toolType: req.params.cat });
  } catch (error) {
    return next(error);
  }
  res.status(200).json({
    status: "success",
    results: tools.length,
    data: {
      tools: tools,
    },
  });
};

const getToolById = async (req, res, next) => {
  let tool;
  try {
    tool = await Tool.find({ _id: req.params.tid });
  } catch (error) {
    return next(error);
  }
  res.status(200).json({
    status: "success",
    data: {
      tool,
    },
  });
};

exports.getAllTools = getAllTools;
exports.getToolsbyCat = getToolsbyCat;
exports.getToolById = getToolById;
