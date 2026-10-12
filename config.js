window.__SERVER_DATA__ = window.__SERVER_DATA__ || {};
window.LOVE_VERSE_DATA = window.LOVE_VERSE_DATA || {};

// Thiết lập nhạc nền (Được thay thế bởi Auto Deploy khi có file nhạc upload)
window.LOVE_VERSE_DATA.music = "./assets/user_bgMusic.mp3";

// Cố gắng parse danh sách ảnh được inject bởi Auto Deploy
let rawImages = null;
try {
  rawImages = ["./assets/user_images_0.jpg","./assets/user_images_1.jpg","./assets/user_images_2.jpg"];
} catch (e) {
  rawImages = null;
}

if (Array.isArray(rawImages) && rawImages.length > 0) {
  window.__SERVER_DATA__.images = rawImages;
  window.LOVE_VERSE_DATA.gallery = rawImages;
} else {
  // Ảnh mẫu kỷ niệm khi xem thử / chưa tải ảnh lên (không dùng ảnh đồ họa layout giao diện)
  const sampleGallery = [
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80"
  ];
  window.__SERVER_DATA__.images = sampleGallery;
  window.LOVE_VERSE_DATA.gallery = sampleGallery;
}
