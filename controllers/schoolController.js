const db = require("../config/db");
const calculateDistance = require("../utils/distance");

// add school
const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const query = `
      INSERT INTO schools (name, address, latitude, longitude)
      VALUES (?, ?, ?, ?)
   `;

    await db.query(query, [name, address, latitude, longitude]);

    res.status(201).json({
      success: true,
      message: "School added successfully",
    });

  } catch (error) {
    console.error("Add School Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// list of schools with distance
const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: "Latitude and Longitude are required",
      });
    }

    const [schools] = await db.query("SELECT * FROM schools");

    const result = schools.map((school) => {
      const distance = calculateDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );

      return { ...school, distance };
    });

    result.sort((a, b) => a.distance - b.distance);

    res.json({
      success: true,
      count: result.length,
      data: result,
    });

  } catch (error) {
    console.error("List Schools Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { addSchool, listSchools };