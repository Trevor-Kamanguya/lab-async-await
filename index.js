// Write your code here!
async function fetchPosts () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();

    displayPosts(data);
}

function displayPosts(posts) {
    const ul = document.getElementById('post-list');

    posts.forEach(function(posts){
        const li = document.createElement('li');

        const h1 = document.createElement('h1');
        h1.textContent = posts.title;

        const p = document.createElement('p');
        p.textContent = posts.body;
        li.append(h1, p);
        ul.append(li);  
    })
}

fetchPosts()