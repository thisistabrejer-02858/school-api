const validateSchool = (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (latitude < -90 || latitude > 90) {
    return res.status(400).json({
      success: false,
      message: "Invalid latitude value",
    });
  }

  if (longitude < -180 || longitude > 180) {
    return res.status(400).json({
      success: false,
      message: "Invalid longitude value",
    });
  }

  next();
};

module.exports = validateSchool;