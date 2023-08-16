import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
// @ts-ignore
import expressAutosanitizer from 'express-autosanitizer';
import path from 'path';
import BaseRouter from './routes';
// import bodyParser from 'body-parser'

const app = express();
app.use(express.json({ limit: '10MB' }), (error: any, req: any, res: any, next: any) => {
    if (error instanceof SyntaxError) {
        return res.send({ data: "large request" });
    } else {
        next();
    }
})
app.use((error: any, req: any, res: any, next: any) => {
    if (error instanceof SyntaxError) {
        return res.send({ data: "json error" });
    } else {
        next();
    }
});
app.use(express.urlencoded({ extended: true, limit: '10MB' }));

app.use(expressAutosanitizer.all);

app.use('/api', BaseRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.json({
        error: err.message,
    });
});

const staticDir = path.join(__dirname, 'public');

app.use(express.static(staticDir));
app.use('*', (req: Request, res: Response) => {
    res.json({ devMessage: 'Url not found' })
});

export default app;

