window.onload = function () {
    setInterval(
        function () {
            //$(".estimated-time").each(addToSyncStorage($(this)));
            $(".estimated-time").each(function (index) {
                var key = $(this).parent().parent().text().hashCode();
                var value = $(this).parent().parent().html();
                var delay = {};
                delay[key] = value;
                chrome.storage.sync.set({ delay }, function () {
                    console.log("La till en försening/inställt: \nKey (hash): " + key + "\nValue (html): " + value + "\n");
                });
            });

            //$(".cancelled").each(addToSyncStorage($(this)));
            $(".cancelled").each(function (index) {
                var key = $(this).parent().parent().text().hashCode();
                var delay = {};
                var value = $(this).parent().parent().html();
                delay[key] = value;
                chrome.storage.sync.set({ delay }, function () {
                    console.log("La till en försening/inställt: \nKey (hash): " + key + "\nValue (html): " + value + "\n");
                });
            });
        }, 
        500);
}

var addToSyncStorage = function (node) {
    console.log("Nod: " + node.text() + "\n");
    var key = node.parent().parent().text().hashCode();
    var delay = {};
    delay[key] = node.parent().parent().html();
    chrome.storage.sync.set({ delay }, function () {
        console.log("La till en försening/inställt: \nKey (hash): " + key + "\nValue (html): " + node.parent().parent().html() + "\n");
    });
};

String.prototype.hashCode = function() {
    var hash = 0, i, chr;

    if (this.length === 0) 
        return hash;
    
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    
    return hash;
};
