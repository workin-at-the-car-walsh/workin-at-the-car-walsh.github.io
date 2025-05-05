const posts = ['post1.md', 'post2.md'];

function renderPost(title, content) {
  const container = document.getElementById('posts');
  const div = document.createElement('div');
  div.className = 'post';
  div.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
  container.appendChild(div);
}

async function loadPosts() {
  for (let filename of posts) {
    const response = await fetch(`posts/${filename}`);
    const text = await response.text();
    const title = filename.replace('.md', '').replace(/^\w/, c => c.toUpperCase());
    renderPost(title, text);
  }
}

loadPosts();
