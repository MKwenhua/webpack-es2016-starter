const generateList = require('./parts/list_func.js');
const modifyDomSelector = require('./parts/domListConvert.js');
const arrayOfSmartestAnimals = require('./data/smart_animals.js');

function innitApp() {
    modifyDomSelector();

    document.querySelector('#animalList').innerHTML = generateList(arrayOfSmartestAnimals);

    const sections = document.getAll('.tabs-contents').reduce((obj, itm) => {
        if (itm.classList.length === 1) {
            obj.selected = itm.dataset.sect;
        }
        obj[itm.dataset.sect] = itm;
        return obj;
    }, {});

    sections.switchView = (keyy) => {
        sections[sections.selected].classList.add('hide-elm');
        sections.selected = keyy;
        sections[keyy].classList.remove('hide-elm');
    }
    console.log('sections', sections);

    const sectionTabs = document.getAll('.span-tab-thing');

    console.log('sectionTabs', sectionTabs);

    document.getElementById('tabBlock').onclick = (e) => {
        if (e.target.tagName !== 'SPAN' || e.target.classList.contains('on')) return

        sectionTabs.forEach((itm) => {
            if (itm.dataset.sect === sections.selected) {
                itm.classList.remove('on');
            }
        })
        e.target.classList.add('on');

        sections.switchView(e.target.dataset.sect);
    }

};
innitApp();
