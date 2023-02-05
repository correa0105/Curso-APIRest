import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log('Server Port', port);
  console.log(`Running on http://localhost:${port}`);
});
