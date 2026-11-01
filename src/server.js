import app from "./app/app.js";
import ConnectDB from "./config/db.js";
import config from "./config/config.js";
await ConnectDB()
const PORT = config.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})