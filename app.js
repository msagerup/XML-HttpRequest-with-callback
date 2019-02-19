const http = new easyHTTP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/postfs', (err, responce) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(responce);
//   }
// });

// Create Data
const data = {
  title: 'Costum post',
  body: 'This is a costom post'
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//DELETE Posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, responce) => {
  if (err) {
    console.log(err);
  } else {
    console.log(responce);
  }
});
