const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');
const postSection = document.getElementById('Postsection');
gridViewBtn.addEventListener('click', () => {
  const posts = postSection.querySelectorAll('.col-12');
  posts.forEach(post => {
    post.classList.remove('col-12');
    post.classList.add('col-md-4');
  });
Postsection.classList.add('grid-view');
Postsection.classList.remove('list-view');
});

listViewBtn.addEventListener('click', () => {
  const posts = postSection.querySelectorAll('.col-md-4');
  posts.forEach(post => {
    post.classList.remove('col-md-4');
    post.classList.add('col-12');
  });
  Postsection.classList.add('list-view');
  Postsection.classList.remove('grid-view');
});