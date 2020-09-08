function comments(response) {
  console.log(response);
}
let apiUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";

axios.get(apiUrl).then(comments);

function email(response) {
  console.log(response.data.email);
}

let api = "https://jsonplaceholder.typicode.com/users/1";

axios.get(api).then(email);
