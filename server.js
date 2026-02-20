import  express  from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/produceRoutes.js'
import paymentRoutes from './routes/paymentRoute.js'
import cors from "cors";
import faq from './routes/faqRoute.js'
 
//config env
dotenv.config();

//database config
connectDB();

//res object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
 app.use("/api/v1/auth",authRoutes);
 app.use("/api/v1/category",categoryRoutes);
 app.use("/api/v1/product",productRoutes)
 app.use("/api/v1/faq",faq)
 app.use("/api/payment", paymentRoutes);

app.get('/',(req,res)=>{
res.send({
  message:'welcome to ecommerce app'
})
}) 

 
export default app;







