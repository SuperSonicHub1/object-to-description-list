class HelloWorld {
	constructor(name) {
		this.name = name
	}

	toString() {
		return `Hello, ${this.name}`
	}
}

const target = document.getElementById("target")
const testObject = {
	hello: "world",
	life: 42,
	meaning: undefined,
	existance: null,
	time: Infinity,
	string: NaN,
	children: ["Johnny", "Remmy", "Earl"],
	multi: {
		object: "couldn't be me",
		another: {
			one: "really?"
		}
	},
	alive: false,
	classes: new HelloWorld("name")
}

/**
 * @param {any} text
 */
function createDescriptionTerm(text) {
	const dt = document.createElement("dt")
	dt.textContent = String(text)
	return dt
}

/**
 * @param {any} text
 * @param {boolean?} once
 */
function createDescriptionDetails(text, once) {
	if (text instanceof Array) {
		return text.map((el) => createDescriptionDetails(el, true))
	}

	const dd = document.createElement("dd")

	if (typeof text === "object" && text !== null && text.toString() == "[object Object]") {
		objectToDescriptionList(dd, text)
	} else dd.textContent = String(text)

	return once ? dd : [dd]
}

/**
 * @param {HTMLElement} element
 * @param {Object<string, any>} object
 */
function objectToDescriptionList(element, object) {
	const dl = document.createElement("dl")
	for (const [key, value] of Object.entries(object)) {
		dl.append(
			createDescriptionTerm(key),
			...createDescriptionDetails(value)
		)
	}
	element.appendChild(dl)
}

objectToDescriptionList(target, testObject)
