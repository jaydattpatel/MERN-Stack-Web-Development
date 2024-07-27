import dotenv from "dotenv";
const result = dotenv.config();

if (result.error) {
  console.log("Unable to import environment variables...!");
  throw result.error;
}

// console.log(result.parsed);
