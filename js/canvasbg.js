const canvas = document.getElementById("banner-cms")
const context = canvas.getContext("2d")

const img = new Image();
	img.src = "./img/blue002.png"
	img.onload = () => {
  		context.drawImage(img, 200, 200, 1822, 850, 0, 0, 1822,850)
	}