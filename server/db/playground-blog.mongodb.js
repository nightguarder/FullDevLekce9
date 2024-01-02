/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sample_blog');
// Create the users collection and insert a few documents.
db.getCollection('users').insertMany([
    { 'username': 'user1', 'email': 'user1@example.com' },
    { 'username': 'user2', 'email': 'user2@example.com' },
    { 'username': 'user3', 'email': 'user3@example.com' },
  ]);
  
  // Create the articles collection and insert a few documents.
  db.getCollection('articles').insertMany([
    { 'title': 'Article 1', 'author': 'user1', 'published_at': new Date(), 'content': 'Content of Article 1' },
    { 'title': 'Article 2', 'author': 'user2', 'published_at': new Date(), 'content': 'Content of Article 2' },
    { 'title': 'Article 3', 'author': 'user3', 'published_at': new Date(), 'content': 'Content of Article 3' },
  ]);
  
  // Run a find command to view all articles.
  const allArticles = db.getCollection('articles').find({})
  
  // Print all articles to the output window.
  console.log(allArticles);
