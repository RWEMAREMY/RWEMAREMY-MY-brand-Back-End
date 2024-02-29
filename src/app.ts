import app from './index'
import database from './config/DB'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT || 3000;
database();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
