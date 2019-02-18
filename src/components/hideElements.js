export function hideElements(myclass,...els) { //helper func that hides
    for (let el of els) {
        el.classList.add(myclass);
    }
}
