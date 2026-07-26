const likeBtn = document.querySelectorAll(".heart_wrap");

const emptyHeart = '<img src="./img/heart_stroke.png" alt="찜 취소" />';
const fillHeart = '<img src="./img/heart_fill.png" alt="찜" />';

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
// 하트 클릭 이벤트

const capsuleBtn = document.querySelectorAll(".capsule");

const capsuleBtnClick = (e) => {
  const target = e.currentTarget;

  if (target.classList.contains("active")) {
    target.classList.remove("active");
    return;
  }

  for (let i = 0; i < capsuleBtn.length; i++) {
    capsuleBtn[i].classList.remove("active");
  }

  target.classList.add("active");
};

for (let i = 0; i < capsuleBtn.length; i++) {
  capsuleBtn[i].addEventListener("click", capsuleBtnClick);
}

//캡슐 클릭 이벤트

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".pagination",
  },
  autoplay: {
    delay: 2000,
  },
});
