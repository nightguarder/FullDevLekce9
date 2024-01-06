import app from './app';

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1"
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server is running: http://${host}:${port}`);
  console.log(port);
  /* eslint-enable no-console */
});
