import Entry from "Entry.js";

const newEntryDataDiv = document.getElementsByClassName('.newEntryData');
const newEntryButDiv = document.getElementById('newEntryBut');
const updateEntryDataDiv = document.getElementsByClassName('.updateEntryData');
const updateEntryButDiv = document.getElementsByClassName('updateEntryBut');

const addEntry = (log) => {
    let date = newEntryDataDiv[0].value;
    let dist = newEntryDataDiv[1].value;
    let loc = newEntryDataDiv[2].value;
    let purp = newEntryDataDiv[3].value;
    let new_entry = new Entry(date, dist, loc, purp);
    log.push(new_entry);
}

const rmEntry = (log, entry) => {
    log.pop(entry);
}

const editEntry = (log, entry, editType) => {
    
}

const loadLog = () => {

}

const saveLog = () => {

}

const tempAutosave = () => {

}

const miToKm = () => {

}

const kmToMi = () => {
    
}