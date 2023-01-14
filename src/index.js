const express = require("express");
const apicache = require("apicache");
const cors = require("cors");
const v1WorkoutRouter = require("./v1/routes/empleadosRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const whiteList = ['http://localhost:4200/empleados'];
app.use(cors())
const PORT = process.env.PORT || 4000;
const cache = apicache.middleware;

app.use(express.json());//parcear una peticion que te llegue
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
