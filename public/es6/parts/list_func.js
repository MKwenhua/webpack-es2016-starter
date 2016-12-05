const generateList = (array) => {
    return array.map((itm, i) => {
        let className = i % 2 < 1 ? "" : "odd-li";
        return `<li class="${ className }">
	             <img src="${itm.img}" height="35" >
	             <span class="list-span">${itm.name}</span>
	         </li>`
    }).join('')
}

module.exports = generateList;
