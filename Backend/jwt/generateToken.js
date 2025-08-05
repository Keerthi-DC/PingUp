import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "1d",
  });

  // ✅ CRUCIAL PART
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,              // ✅ Required for production on HTTPS (Render)
    sameSite: "None",          // ✅ Must be 'None' for cross-origin frontend
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
};

export default createTokenAndSaveCookie;
