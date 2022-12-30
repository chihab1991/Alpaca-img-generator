/* imgs */

const accessories = [
	{
		name: "earings",
		url: "../alpaca-generator-assets/alpaca/accessories/earings.png",
	},
	{
		name: "flower",
		url: "../alpaca-generator-assets/alpaca/accessories/flower.png",
	},
	{
		name: "glasses",
		url: "../alpaca-generator-assets/alpaca/accessories/glasses.png",
	},
	{
		name: "headphone",
		url: "../alpaca-generator-assets/alpaca/accessories/headphone.png",
		default: true,
	},
];

const backgrounds = [
	{
		name: "blue50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/blue50.png",
		default: true,
	},
	{
		name: "blue60",
		url: "../alpaca-generator-assets/alpaca/backgrounds/blue60.png",
	},
	{
		name: "blue70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/blue70.png",
	},
	{
		name: "darkblue30",
		url: "../alpaca-generator-assets/alpaca/backgrounds/darkblue30.png",
	},
	{
		name: "darkblue50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/darkblue50.png",
	},
	{
		name: "darkblue70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/darkblue70.png",
	},
	{
		name: "green50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/green50.png",
	},
	{
		name: "green60",
		url: "../alpaca-generator-assets/alpaca/backgrounds/green60.png",
	},
	{
		name: "green70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/green70.png",
	},
	{
		name: "grey40",
		url: "../alpaca-generator-assets/alpaca/backgrounds/grey40.png",
	},
	{
		name: "grey70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/grey70.png",
	},
	{
		name: "grey80",
		url: "../alpaca-generator-assets/alpaca/backgrounds/grey80.png",
	},
	{
		name: "red50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/red50.png",
	},
	{
		name: "red60",
		url: "../alpaca-generator-assets/alpaca/backgrounds/red60.png",
	},
	{
		name: "red70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/red70.png",
	},
	{
		name: "yellow50",
		url: "../alpaca-generator-assets/alpaca/backgrounds/yellow50.png",
	},
	{
		name: "yellow60",
		url: "../alpaca-generator-assets/alpaca/backgrounds/yellow60.png",
	},
	{
		name: "yellow70",
		url: "../alpaca-generator-assets/alpaca/backgrounds/yellow70.png",
	},
];

const ears = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/ears/default.png",
		default: true,
	},
	{
		name: "tilt-backward",
		url: "../alpaca-generator-assets/alpaca/ears/tilt-backward.png",
	},
	{
		name: "tilt-forward",
		url: "../alpaca-generator-assets/alpaca/ears/tilt-forward.png",
	},
];
const eyes = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/eyes/default.png",
		default: true,
	},
	{
		name: "angry",
		url: "../alpaca-generator-assets/alpaca/eyes/angry.png",
	},
	{
		name: "naughty",
		url: "../alpaca-generator-assets/alpaca/eyes/naughty.png",
	},
	{
		name: "panda",
		url: "../alpaca-generator-assets/alpaca/eyes/panda.png",
	},
	{
		name: "smart",
		url: "../alpaca-generator-assets/alpaca/eyes/smart.png",
	},
	{
		name: "star",
		url: "../alpaca-generator-assets/alpaca/eyes/star.png",
	},
];

const hair = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/hair/default.png",
		default: true,
	},
	{
		name: "bang",
		url: "../alpaca-generator-assets/alpaca/hair/bang.png",
	},

	{
		name: "curls",
		url: "../alpaca-generator-assets/alpaca/hair/curls.png",
	},
	{
		name: "elegant",
		url: "../alpaca-generator-assets/alpaca/hair/elegant.png",
	},
	{
		name: "fancy",
		url: "../alpaca-generator-assets/alpaca/hair/fancy.png",
	},

	{
		name: "quiff",
		url: "../alpaca-generator-assets/alpaca/hair/quiff.png",
	},
	{
		name: "short",
		url: "../alpaca-generator-assets/alpaca/hair/short.png",
	},
];

const leg = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/leg/default.png",
		default: true,
	},
	{
		name: "bubble-tea",
		url: "../alpaca-generator-assets/alpaca/leg/bubble-tea.png",
	},
	{
		name: "cookie",
		url: "../alpaca-generator-assets/alpaca/leg/cookie.png",
	},
	{
		name: "game-console",
		url: "../alpaca-generator-assets/alpaca/leg/game-console.png",
	},
	{
		name: "tilt-backward",
		url: "../alpaca-generator-assets/alpaca/leg/tilt-backward.png",
	},
	{
		name: "tilt-forward",
		url: "../alpaca-generator-assets/alpaca/leg/tilt-forward.png",
	},
];

const mouth = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/mouth/default.png",
		default: true,
	},
	{
		name: "astonished",
		url: "../alpaca-generator-assets/alpaca/mouth/astonished.png",
	},
	{
		name: "eating",
		url: "../alpaca-generator-assets/alpaca/mouth/eating.png",
	},
	{
		name: "laugh",
		url: "../alpaca-generator-assets/alpaca/mouth/laugh.png",
	},
	{
		name: "tongue",
		url: "../alpaca-generator-assets/alpaca/mouth/tongue.png",
	},
];

const neck = [
	{
		name: "default",
		url: "../alpaca-generator-assets/alpaca/neck/default.png",
		default: true,
	},
	{
		name: "bend-backward",
		url: "../alpaca-generator-assets/alpaca/neck/bend-backward.png",
	},
	{
		name: "bend-forward",
		url: "../alpaca-generator-assets/alpaca/neck/bend-forward.png",
	},
	{
		name: "thick",
		url: "../alpaca-generator-assets/alpaca/neck/thick.png",
	},
];

/* alpaca dom elements */

const bgColorImg = document.querySelector(".bg-color");
const hairImg = document.querySelector(".hair");
const earsImg = document.querySelector(".ears");
const eyesImg = document.querySelector(".eyes");
const mouthImg = document.querySelector(".mouth");
const neckImg = document.querySelector(".neck");
const legImg = document.querySelector(".leg");
const accessoriesImg = document.querySelector(".accessories");
const downloadBtn = document.querySelector(".download-btn");
const randomBtn = document.querySelector(".random-btn");

const hairBtn = document.querySelector(".hair-btn");
const earsBtn = document.querySelector(".ears-btn");
const eyesBtn = document.querySelector(".eyes-btn");
const mouthBtn = document.querySelector(".mouth-btn");
const neckBtn = document.querySelector(".neck-btn");
const legBtn = document.querySelector(".leg-btn");
const accessoriesBtn = document.querySelector(".accessories-btn");
const bgBtn = document.querySelector(".bg-btn");

/* alpaca img*/
const alpacaImg = document.querySelector(".img-container");
/* */
const styleBtns = document.querySelector(".alpaca-style-btns");

window.onload = () => {
	addStyles(hair, changeHair);
};
/* fix height of img-container */
// const imgContainer = document.querySelector(".img-container");
// imgContainer.style.height = imgContainer.offsetWidth;
/* add  btn styles */
hairBtn.addEventListener("click", () => {
	const currActive = document
		.querySelector(".active")
		.classList.remove("active");
	hairBtn.classList.add("active");
	addStyles(hair, changeHair);
});
earsBtn.addEventListener("click", () => {
	const currActive = document
		.querySelector(".active")
		.classList.remove("active");
	earsBtn.classList.add("active");
	addStyles(ears, changeEars);
});
eyesBtn.addEventListener("click", () => {
	const currActive = document
		.querySelector(".active")
		.classList.remove("active");
	eyesBtn.classList.add("active");
	addStyles(eyes, changeEyes);
});
mouthBtn.addEventListener("click", () => {
	const currActive = document
		.querySelector(".active")
		.classList.remove("active");
	mouthBtn.classList.add("active");
	addStyles(mouth, changeMouth);
});
neckBtn.addEventListener("click", () => {
	const currActive = document
		.querySelector(".active")
		.classList.remove("active");
	neckBtn.classList.add("active");
	addStyles(neck, changeNeck);
});
legBtn.addEventListener("click", () => {
	const currActive = document
		.querySelector(".active")
		.classList.remove("active");
	legBtn.classList.add("active");
	addStyles(leg, changeLeg);
});
accessoriesBtn.addEventListener("click", () => {
	const currActive = document
		.querySelector(".active")
		.classList.remove("active");
	accessoriesBtn.classList.add("active");
	addStyles(accessories, changeAccessories);
});
bgBtn.addEventListener("click", () => {
	const currActive = document
		.querySelector(".active")
		.classList.remove("active");
	bgBtn.classList.add("active");
	addStyles(backgrounds, changeBackground);
});

const addStyles = (accessory, fct) => {
	styleBtns.innerHTML = "";
	accessory.map((el) => {
		const createHairBtn = document.createElement("button");
		el.default
			? createHairBtn.classList.add("btn", "active-img", el.name)
			: createHairBtn.classList.add("btn", el.name);
		// if(el.default) createHairBtn.classList.add("active-btn");
		createHairBtn.innerHTML = el.name;
		createHairBtn.dataset.name = el.name;
		createHairBtn.onclick = fct;
		styleBtns.appendChild(createHairBtn);
	});
};
// functions
const changeAccessories = (e) => {
	document.querySelector(".active-img").classList.remove("active-img");
	e.target.classList.add("active-img");
	accessories.map((el) => {
		if (el.name === e.target.dataset.name) {
			accessoriesImg.src = el.url;
		}
	});
};

const changeBackground = (e) => {
	document.querySelector(".active-img").classList.remove("active-img");
	e.target.classList.add("active-img");
	backgrounds.map((el) => {
		if (el.name === e.target.dataset.name) {
			bgColorImg.src = el.url;
		}
	});
};

const changeEars = (e) => {
	document.querySelector(".active-img").classList.remove("active-img");
	e.target.classList.add("active-img");
	ears.map((el) => {
		if (el.name === e.target.dataset.name) {
			earsImg.src = el.url;
		}
	});
};
const changeEyes = (e) => {
	document.querySelector(".active-img").classList.remove("active-img");
	e.target.classList.add("active-img");
	eyes.map((el) => {
		if (el.name === e.target.dataset.name) {
			eyesImg.src = el.url;
		}
	});
};

const changeHair = (e) => {
	document.querySelector(".active-img").classList.remove("active-img");
	e.target.classList.add("active-img");
	hair.map((el) => {
		if (el.name === e.target.dataset.name) {
			hairImg.src = el.url;
		}
	});
};

const changeLeg = (e) => {
	document.querySelector(".active-img").classList.remove("active-img");
	e.target.classList.add("active-img");
	leg.map((el) => {
		if (el.name === e.target.dataset.name) {
			legImg.src = el.url;
		}
	});
};

const changeMouth = (e) => {
	document.querySelector(".active-img").classList.remove("active-img");
	e.target.classList.add("active-img");
	mouth.map((el) => {
		if (el.name === e.target.dataset.name) {
			mouthImg.src = el.url;
		}
	});
};
const changeNeck = (e) => {
	document.querySelector(".active-img").classList.remove("active-img");
	e.target.classList.add("active-img");
	neck.map((el) => {
		if (el.name === e.target.dataset.name) {
			neckImg.src = el.url;
		}
	});
};

/*  download function */
const downloadImg = async () => {
	const a = document.createElement("a");
	html2canvas(alpacaImg).then((canvas) => {
		const url = canvas.toDataURL("image/png");
		a.href = url;
		a.download = new Date().getTime();
		a.click();
	});
};
/* complete random function */
const randomAccessory = (accessori, accessoriImg) => {
	const rand = Math.floor(Math.random() * accessori.length);
	const className = `.${accessori[rand].name}`;

	accessoriImg.src = accessori[rand].url;
};
const randomImg = () => {
	randomAccessory(hair, hairImg);
	randomAccessory(accessories, accessoriesImg);
	randomAccessory(backgrounds, bgColorImg);
	randomAccessory(ears, earsImg);
	randomAccessory(eyes, eyesImg);
	randomAccessory(leg, legImg);
	randomAccessory(mouth, mouthImg);
};
