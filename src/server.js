import app from './app';

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log();
  console.log('Server Port', port);
  console.log(`Running on ${process.env.APP_URL}:${port}`);
});
