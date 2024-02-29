
  if (req.user.role === "admin") {
    next();
  } else {
    return res.send("unauthorized user ...");
  }
};