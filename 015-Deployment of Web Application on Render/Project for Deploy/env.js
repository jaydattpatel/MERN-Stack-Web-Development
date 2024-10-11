import dotenv from "dotenv";
const result = dotenv.config({ path: "./envVariables.env" });

if (result.error) {
  console.log("Unable to import environment variables...!");
  throw result.error;
}

// console.log(result.parsed);
