

var db;

try {
    if (window.openDatabase) {
        db = openDatabase("NoteTest", "1.0", "HTML5 Database API example", 200000);
        if (!db)
            alert("Failed to open the database on disk.  This is probably because the version was bad or there is not enough space left in this domain's quota");
    } else
        alert("Couldn't open the database.  Please try with a WebKit nightly with this feature enabled");
} catch(err) { }

const SupportsTouches = ('createTouch' in document);
const StartEventType = SupportsTouches ? 'touchstart' : 'mousedown';
const MoveEventType = SupportsTouches ? 'touchmove' : 'mousemove';
const EndEventType = SupportsTouches ? 'touchend' : 'mouseup';

var captured = null;
var highestZ = 0;
var highestId = 0;

function Note()
{
    var self = this;

    var note = document.createElement('div');
    note.className = 'note';
    note.addEventListener('click', this, false);
    this.note = note;

    var close = document.createElement('div');
    close.className = 'closebutton';
    close.addEventListener(StartEventType, this, false);
    note.appendChild(close);

    var edit = document.createElement('textarea');
    edit.className = 'edit';
    edit.addEventListener('keyup', this, false);
    note.appendChild(edit);
    this.editField = edit;

    var ts = document.createElement('div');
    ts.className = 'timestamp';
    ts.addEventListener(StartEventType, this, false);
    note.appendChild(ts);
    this.lastModified = ts;

    document.body.appendChild(note);
    
    return this;
}

Note.prototype = {
    get id()
    {
        if (!("_id" in this))
            this._id = 0;
        return this._id;
    },

    set id(x)
    {
        this._id = x;
    },

    get text()
    {
        return this.editField.value;
    },

    set text(x)
    {
        this.editField.value = x;
    },

    get timestamp()
    {
        if (!("_timestamp" in this))
            this._timestamp = 0;
        return this._timestamp;
    },

    set timestamp(x)
    {
        if (this._timestamp == x)
            return;

        this._timestamp = x;
        var date = new Date();
        date.setTime(parseFloat(x));
        this.lastModified.textContent = modifiedString(date);
    },

    get left()
    {
        return this.note.style.left;
    },

    set left(x)
    {
        this.note.style.left = x;
    },

    get top()
    {
        return this.note.style.top;
    },

    set top(x)
    {
        this.note.style.top = x;
    },

    get zIndex()
    {
        return this.note.style.zIndex;
    },

    set zIndex(x)
    {
        this.note.style.zIndex = x;
    },

    close: function(event)
    {
        this.cancelPendingSave();

        var self = this;
        db.transaction(function(tx)
        {
            tx.executeSql("DELETE FROM WebKitStickyNotes WHERE id = ?", [self.id]);
        });
        
        var duration = 250;
        
        if (event.shiftKey) {
            duration *= 10;
            this.note.style.webkitTransitionDuration = duration + 'ms';
        }
        this.note.className = "note closed";

        setTimeout(function() { document.body.removeChild(self.note); }, duration);
    },

    saveSoon: function()
    {
        this.cancelPendingSave();
        var self = this;
        this._saveTimer = setTimeout(function() { self.save(); }, 200);
    },

    cancelPendingSave: function()
    {
        if (!("_saveTimer" in this))
            return;
        clearTimeout(this._saveTimer);
        delete this._saveTimer;
    },

    save: function()
    {
        this.cancelPendingSave();

        if ("dirty" in this) {
            this.timestamp = new Date().getTime();
            delete this.dirty;
        }

        var note = this;
        db.transaction(function (tx)
        {
            tx.executeSql("UPDATE WebKitStickyNotes SET note = ?, timestamp = ?, left = ?, top = ?, zindex = ? WHERE id = ?", [note.text, note.timestamp, note.left, note.top, note.zIndex, note.id]);
        });
    },

    saveAsNew: function()
    {
        this.timestamp = new Date().getTime();
        
        var note = this;
        db.transaction(function (tx) 
        {
            tx.executeSql("INSERT INTO WebKitStickyNotes (id, note, timestamp, left, top, zindex) VALUES (?, ?, ?, ?, ?, ?)", [note.id, note.text, note.timestamp, note.left, note.top, note.zIndex]);
        }); 
    },

    handleEvent: function(event)
    {
        switch (event.type) {
        
        case StartEventType:
            if (event.currentTarget.className == 'closebutton') {
                event.preventDefault();
                this.close(event);
            } else {
                this.onDragStart(event);
            }
            break;
        case MoveEventType:
            this.onDragMove(event);
            break;
        case EndEventType:
            this.onDragEnd(event);
            break;
        case "click":
            this.onNoteClick();
            break;
        case "keyup":
            this.onKeyUp();
            break;
        }
    },

    onDragStart: function(event)
    {
        // stop page from panning on iPhone/iPad - we're moving a note, not the page
        event.preventDefault();

        var e = (SupportsTouches && event.touches && event.touches.length > 0) ? event.touches[0] : event;

        captured = this;
        this.startX = e.clientX - this.note.offsetLeft;
        this.startY = e.clientY - this.note.offsetTop;
        this.zIndex = ++highestZ;

        window.addEventListener(MoveEventType, this, true);
        window.addEventListener(EndEventType, this, true);
        
        return false;
    },

    onDragMove: function(event)
    {
        if (this != captured) {
            return;
        }

        // stop page from panning on iPhone/iPad - we're moving a note, not the page
        event.preventDefault();

        var e = (SupportsTouches && event.touches && event.touches.length > 0) ? event.touches[0] : event;

        this.left = e.clientX - this.startX + 'px';
        this.top = e.clientY - this.startY + 'px';
        return false;
    },

    onDragEnd: function(event)
    {
        window.removeEventListener(MoveEventType, this, true);
        window.removeEventListener(EndEventType, this, true);
        
        this.save();
        return false;
    },

    onNoteClick: function(e)
    {
        this.editField.focus();
        getSelection().collapseToEnd();
    },

    onKeyUp: function()
    {
        this.dirty = true;
        this.saveSoon();
    }
};

function loaded()
{
    db.transaction(function(tx) {
        tx.executeSql("SELECT COUNT(*) FROM WebkitStickyNotes", [], function(result) {
            loadNotes();
        }, function(tx, error) {
            tx.executeSql("CREATE TABLE WebKitStickyNotes (id REAL UNIQUE, note TEXT, timestamp REAL, left TEXT, top TEXT, zindex REAL)", [], function(result) { 
                loadNotes(); 
            });
        });
    });
}

function loadNotes()
{
    db.transaction(function(tx) {
        tx.executeSql("SELECT id, note, timestamp, left, top, zindex FROM WebKitStickyNotes", [], function(tx, result) {
            for (var i = 0; i < result.rows.length; ++i) {
                var row = result.rows.item(i);
                var note = new Note();
                note.id = row['id'];
                note.text = row['note'];
                note.timestamp = row['timestamp'];
                note.left = row['left'];
                note.top = row['top'];
                note.zIndex = row['zindex'];

                if (row['id'] > highestId)
                    highestId = row['id'];
                if (row['zindex'] > highestZ)
                    highestZ = row['zindex'];
            }

            if (!result.rows.length)
                newNote();
        }, function(tx, error) {
            alert('Failed to retrieve notes from database - ' + error.message);
            return;
        });
    });
}

function zeroPadIfNecessary(num)
{
    if (num < 10)
        return "0" + num;
    else
        return "" + num;
}

function modifiedString(date)
{
    return 'Last Modified: ' + date.getFullYear() + '-' + zeroPadIfNecessary(date.getMonth() + 1) + '-' + zeroPadIfNecessary(date.getDate()) + ' ' + zeroPadIfNecessary(date.getHours()) + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function newNote()
{
    var note = new Note();
    note.id = ++highestId;
    note.timestamp = new Date().getTime();
    note.left = Math.round(Math.random() * (document.width / 3)) + 'px';
    note.top = Math.round(Math.random() * (document.height / 3)) + 'px';
    note.zIndex = ++highestZ;
    note.saveAsNew();
}

addEventListener('load', loaded, false);