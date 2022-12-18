class Entry:
    def __init__(self, date, dist, loc, purp):
        self.date = date
        self.dist = dist
        self.loc = loc
        self.purp = purp

    def edit_date(self, new_date):
        self.date = new_date

    def edit_dist(self, new_dist):
        self.dist = new_dist

    def edit_loc(self, new_loc):
        self.loc = new_loc

    def edit_purp(self, new_purp):
        self.purp = new_purp

    def __str__(self):
        return str(self.date[0]) + "/" + str(self.date[1]) + "/" + str(self.date[2]) + " | " + str(self.dist) + " | " + self.loc + " | " + self.purp