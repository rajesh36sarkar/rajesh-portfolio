import Contact from "../models/Contact.js";

export const sendContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);

    await newContact.save();

    res.json({
      success: true,
      message: "Message saved successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
