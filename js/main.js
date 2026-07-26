const likeBtn = document.querySelectorAll(".heart_wrap");

const emptyHeart = '<img src="/img/heart_stroke.png" alt="찜 취소" />';
const fillHeart = '<img src="/img/heart_fill.png" alt="찜" />';

const likeBtnClick = (e) => {
  const target = e.currentTarget;

  const isLiked = target.classList.toggle("active");

  if (isLiked) {
    target.innerHTML = fillHeart;
  } else {
    target.innerHTML = emptyHeart;
  }
};

for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", likeBtnClick);
}
