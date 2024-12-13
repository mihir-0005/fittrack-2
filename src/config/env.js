const env = {
  CLARIFAI_API_KEY: import.meta.env.VITE_CLARIFAI_API_KEY,
  CALORIE_NINJA_API_KEY: import.meta.env.VITE_CALORIE_NINJA_API_KEY,
  API_URL: import.meta.env.VITE_API_URL || 'https://fittrack-2-qv8i.onrender.com/api'
};

export default env;