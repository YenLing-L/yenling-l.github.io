let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
let finalCanvas = document.getElementById("final-canvas");
let thumbnailContainer = document.getElementById("thumbnail-container");
let finalImageContainer = document.getElementById("final-image-container");
let cameraContainer = document.getElementById("camera-container");
let controls = document.getElementById("controls");
let ctx = canvas.getContext("2d");
let finalCtx = finalCanvas.getContext("2d");
let currentFilter = "none";
let frameCount = 1;
let photos = [];
let frameColor = "#ffffff"; // 預設相框顏色為白色

// 啟動相機
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("無法訪問相機: ", err);
  });

// 拍照
function capturePhoto() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  applyFilter(currentFilter);
  let photo = new Image();
  photo.src = canvas.toDataURL("image/png");

  // 等待圖片載入完成後再添加到 photos 陣列
  photo.onload = () => {
    photos.push(photo);
    updateThumbnails();

    // 如果照片數量達到 frameCount，顯示最終圖片
    if (photos.length === frameCount) {
      showFinalImage();
    }
  };
}

// 更新縮圖
function updateThumbnails() {
  thumbnailContainer.innerHTML = "";
  photos.forEach((photo) => {
    let thumbnail = document.createElement("img");
    thumbnail.src = photo.src;
    thumbnail.classList.add("thumbnail");
    thumbnailContainer.appendChild(thumbnail);
  });
}

// 顯示最終圖片
function showFinalImage() {
  document.getElementById("phase1").style.display = "none";
  finalImageContainer.style.display = "block";

  // 根據格數設置 finalCanvas 的尺寸
  let finalCanvasWidth, finalCanvasHeight;
  switch (frameCount) {
    case 1:
      finalCanvasWidth = 10.2;
      finalCanvasHeight = 7.6;
      break;
    case 2:
      finalCanvasWidth = 5.1;
      finalCanvasHeight = 7.6;
      break;
    case 3:
      finalCanvasWidth = 5.1;
      finalCanvasHeight = 11.4;
      break;
    case 4:
      finalCanvasWidth = 5.1;
      finalCanvasHeight = 15.2;
      break;
    default:
      finalCanvasWidth = 5.1; // 預設值
      finalCanvasHeight = 15.2; // 預設值
  }

  // 將公分轉換為像素（假設 1 公分 = 37.8 像素）
  const cmToPx = 37.8;
  finalCanvas.width = finalCanvasWidth * cmToPx;
  finalCanvas.height = finalCanvasHeight * cmToPx;

  // 清除 finalCanvas
  finalCtx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);

  // 計算每張照片的高度（包含 1 公分間隔）
  const photoHeight =
    (finalCanvas.height - (frameCount - 0.3) * cmToPx) / frameCount;

  // 將照片繪製到 finalCanvas 中
  photos.forEach((photo, index) => {
    const yPosition = index * (photoHeight + cmToPx); // 每張照片之間有 0.3 公分間隔
    finalCtx.drawImage(photo, 0, yPosition, finalCanvas.width, photoHeight);
  });

  // 預覽 downloadCanvas 的效果
  previewDownloadCanvas();
}

// 預覽 downloadCanvas 的效果
function previewDownloadCanvas() {
  // 創建一個新的 canvas 來模擬 downloadCanvas
  const previewCanvas = document.createElement("canvas");
  const previewCtx = previewCanvas.getContext("2d");

  // 計算新 canvas 的尺寸（包含相框）
  const cmToPx = 37.8;
  const framePaddingTop = 0.3 * cmToPx; // 上方多出 0.3 公分
  const framePaddingLeft = 0.3 * cmToPx; // 左方多出 0.3 公分
  const framePaddingRight = 0.3 * cmToPx; // 右方多出 0.3 公分
  const framePaddingBottom = 1 * cmToPx; // 下方多出 1 公分

  previewCanvas.width =
    finalCanvas.width + framePaddingLeft + framePaddingRight;
  previewCanvas.height =
    finalCanvas.height + framePaddingTop + framePaddingBottom;

  // 繪製相框背景（使用者選擇的顏色）
  previewCtx.fillStyle = frameColor;
  previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);

  // 繪製 finalCanvas 的內容到新 canvas 中
  previewCtx.drawImage(finalCanvas, framePaddingLeft, framePaddingTop);

  // 將 previewCanvas 的內容繪製到 finalCanvas 中
  finalCtx.drawImage(
    previewCanvas,
    0,
    0,
    finalCanvas.width,
    finalCanvas.height
  );
}

// 應用濾鏡
function applyFilter(filter) {
  currentFilter = filter;
  switch (filter) {
    case "sepia":
      ctx.filter = "sepia(1)";
      break;
    case "grayscale":
      ctx.filter = "grayscale(1)";
      break;
    case "vintage":
      ctx.filter = "contrast(1.5) brightness(0.8) sepia(0.2)";
      break;
    default:
      ctx.filter = "none";
  }
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}

// 設置拍照格數
function setFrameCount(count) {
  frameCount = count;
}

// 下載照片（包含相框）
function downloadPhoto() {
  // 創建一個新的 canvas 來繪製最終的圖片和相框
  const downloadCanvas = document.createElement("canvas");
  const downloadCtx = downloadCanvas.getContext("2d");

  // 計算新 canvas 的尺寸（包含相框）
  const cmToPx = 37.8;
  const framePaddingTop = 0.3 * cmToPx; // 上方多出 0.3 公分
  const framePaddingLeft = 0.3 * cmToPx; // 左方多出 0.3 公分
  const framePaddingRight = 0.3 * cmToPx; // 右方多出 0.3 公分
  const framePaddingBottom = 1 * cmToPx; // 下方多出 1 公分

  downloadCanvas.width =
    finalCanvas.width + framePaddingLeft + framePaddingRight;
  downloadCanvas.height =
    finalCanvas.height + framePaddingTop + framePaddingBottom;

  // 繪製相框背景（使用者選擇的顏色）
  downloadCtx.fillStyle = frameColor;
  downloadCtx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);

  // 繪製 finalCanvas 的內容到新 canvas 中
  downloadCtx.drawImage(finalCanvas, framePaddingLeft, framePaddingTop);

  // 導出圖片
  let link = document.createElement("a");
  link.download = "photo.png";
  link.href = downloadCanvas.toDataURL("image/png");
  link.click();
  alert("照片已下載完畢");
}

// 應用相框效果
function applyFrameEffect(color) {
  if (color === "custom") {
    // 讓使用者自訂顏色
    const customColor = prompt(
      "請輸入十六進位顏色代碼（例如：#FF0000 為紅色）："
    );
    if (customColor) {
      frameColor = customColor;
    }
  } else {
    frameColor = color === "black" ? "#000000" : "#ffffff"; // 黑色或白色
  }

  // 重新繪製 finalCanvas 以預覽效果
  showFinalImage();
}

window.addEventListener("resize", () => {
  const iframe = document.querySelector(".spline-container iframe");
  const container = document.querySelector(".spline-container");

  // 根據容器大小動態調整 iframe 的寬高
  iframe.style.width = `${container.clientWidth}px`;
  iframe.style.height = `${container.clientHeight}px`;
});

// 初始化時觸發一次
window.dispatchEvent(new Event("resize"));
