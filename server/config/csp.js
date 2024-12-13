const cspConfig = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      "https://apis.google.com",
      "https://www.googleapis.com",
      "https://accounts.google.com"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      "https://fonts.googleapis.com"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "blob:",
      "https:",
      "https://lh3.googleusercontent.com"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    connectSrc: [
      "'self'",
      "https://api.clarifai.com",
      "https://api.calorieninjas.com",
      "https://www.googleapis.com",
      "https://accounts.google.com",
      "ws://localhost:5173"
    ],
    frameSrc: [
      "'self'",
      "https://accounts.google.com"
    ],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    childSrc: ["'self'", "blob:"],
    workerSrc: ["'self'", "blob:"],
    manifestSrc: ["'self'"],
    formAction: ["'self'"],
    baseUri: ["'self'"]
  }
};

export default cspConfig;