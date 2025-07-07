import express from 'express'
import router from './routes/paymentroutes.routes.js';
import cros from 'cors';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cros());
app.use("/payment",router);
export {app}