import Entry

def add_entry(logs): # logs is a list of log entries
    # still need to fill in the information retrieval
    date = None
    dist = None
    loc = None
    purp = None
    logs.append(Entry(date, dist, loc, purp))

def rm_entry(logs, entry): # entry is an index
    logs.pop(entry)

def edit_entry(logs, entry):
    date = None
    dist = None
    loc = None
    purp = None
    if date != None:
        logs[entry].edit_date(date)
    if dist != None:
        logs[entry].edit_dist(dist)
    if loc != None:
        logs[entry].edit_loc(loc)
    if purp != None:
        logs[entry].edit_purp(purp)