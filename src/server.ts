import { AppDataSource } from "./data-source"
import { app } from "./app";


AppDataSource.initialize().then(async () => {

    console.log("Database connected.")

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`App is running on https://localhost:${PORT}`)
    })
   

}).catch(error => console.log(error))
