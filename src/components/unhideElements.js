export function unhideElements(myclass,...els) { //helper func that unhides
        for (let el of els) {
            el.classList.remove(myclass);
        }
    }
