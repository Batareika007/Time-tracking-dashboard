const periodChoise = document.querySelectorAll(".user-card__nav_item")
const dayLink = document.getElementById("day")
const weekLink = document.getElementById("week")
const monthLink = document.getElementById("month")
const dayData = document.querySelectorAll(".day")
const weekData = document.querySelectorAll(".week")
const monthData = document.querySelectorAll(".month")

dayLink.addEventListener("click", (el) => {
	removeActive()
	addActive(el.target.id)
})

weekLink.addEventListener("click", (el) => {
	removeActive()
	addActive(el.target.id)
})

monthLink.addEventListener("click", (el) => {
	removeActive()
	addActive(el.target.id)
})

function addActive(element) {
	switch (element) {
		case "day":
			dayData.forEach((el) => (el.style.display = "unset"))
			dayLink.classList.add("active")
			break
		case "week":
			weekData.forEach((el) => (el.style.display = "unset"))
			weekLink.classList.add("active")
			break
		case "month":
			monthData.forEach((el) => (el.style.display = "unset"))
			monthLink.classList.add("active")
			break
		default:
			break
	}
}

function removeActive() {
	periodChoise.forEach((link) => {
		link.classList.remove("active")
	})
	dayData.forEach((el) => (el.style.display = "none"))
	weekData.forEach((el) => (el.style.display = "none"))
	monthData.forEach((el) => (el.style.display = "none"))
}
