document.addEventListener("DOMContentLoaded", () => {
  // 1. 좋아요 버튼 토글 핸들러 함수
  const handleHeartToggle = (e) => {
    e.preventDefault(); // 링크 클릭 시 기본 이동 동작 방지
    const img = e.currentTarget.querySelector("img");
    if (!img) return;

    // heart_stroke.png <-> heart_fill.png 이미지 교체
    if (img.src.includes("heart_stroke.png")) {
      img.src = img.src.replace("heart_stroke.png", "heart_fill.png");
    } else {
      img.src = img.src.replace("heart_fill.png", "heart_stroke.png");
    }
  };

  // 2. 이벤트 리스너 바인딩
  const heartWraps = document.querySelectorAll(".heart_wrap");
  heartWraps.forEach((heart) => {
    heart.addEventListener("click", handleHeartToggle);
  });
});
