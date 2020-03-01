let userName, posts, comments;

function main() {
  const userId = new URLSearchParams(window.location.search).get('id');
  if (userId !== undefined && userId !== null) {
    showPostPage(userId);
  } else {
    console.log('There is no user id provided');
  }
}

function showPostPage(userId) {
  showSpiner();
  Promise.all([fetchUsers(), fetchUsersPosts(userId)]).then(
    ([usersResponse, postsResponse]) => {
      //debugger;
      userName = usersResponse.find(user => user.id === +userId).name;
      posts = postsResponse;
      Promise.all(posts.map(post => fetchUserComments(post.id))).then(
        commentsResponse => {
          comments = commentsResponse;
          hideSpiner();

          let rendPosts = renderPosts();
          rootNode.appendChild(rendPosts);
        }
      );
    }
  );
}

function renderComment(comment) {
  let commentWrapper = document.createElement('div');

  let h4Name = document.createElement('h4');
  let h4Text = document.createTextNode(comment.name);
  h4Name.appendChild(h4Text);

  let pEmail = document.createElement('p');
  pEmail.className = 'emailComment';
  let pEmailText = document.createTextNode(comment.email);
  pEmail.appendChild(pEmailText);

  let pBody = document.createElement('p');
  let pBodyText = document.createTextNode(comment.body);
  pBody.appendChild(pBodyText);

  commentWrapper.appendChild(h4Name);
  commentWrapper.appendChild(pEmail);
  commentWrapper.appendChild(pBody);

  return commentWrapper;
}

function renderComments(postId) {
  // wrapper
  let commentsWrapper = document.createElement('div');
  let postComments = comments.find(commentArr =>
    commentArr.find(comment => +comment.postId === +postId)
  );

  postComments.map(comment => {
    let rendComment = renderComment(comment);
    commentsWrapper.appendChild(rendComment);
  });

  return commentsWrapper;
}

function renderPost(postId) {
  let post = posts.find(post => post.id === +postId);

  let postWrapper = document.createElement('article');

  let h2 = document.createElement('h2');
  let h2Text = document.createTextNode(post.title);
  h2.appendChild(h2Text);

  let p = document.createElement('p');
  let pText = document.createTextNode(post.body);
  p.appendChild(pText);

  postWrapper.appendChild(h2);
  postWrapper.appendChild(p);

  let rendCom = renderComments(postId);
  postWrapper.appendChild(rendCom);

  return postWrapper;
}

function renderPosts() {
  // wrapper div
  let postsWrapper = document.createElement('div');
  let h1UserName = document.createElement('h1');
  let h1UserNameText = document.createTextNode(userName);
  h1UserName.appendChild(h1UserNameText);
  postsWrapper.appendChild(h1UserName);

  posts.map(post => {
    let rendPost = renderPost(post.id);
    //debugger;
    // wrapper div append post
    postsWrapper.appendChild(rendPost);
  });
  return postsWrapper;
}

main();
