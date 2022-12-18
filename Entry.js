class Entry {
    constructor(date=null, dist=null, loc=null, purp=null) {
        this.date = date;
        this.dist = dist;
        this.loc = loc;
        this.purp = purp;
    }

    editDate(new_date) {this.date = new_date}

    editDist(new_dist) {this.dist = new_dist}

    editLoc(new_loc) {this.loc = new_loc}

    editPurp(new_purp) {this.purp = new_purp}
}