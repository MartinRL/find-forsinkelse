window.onload = function () {
    setInterval(
        function () { 
                $(".estimated-time").each( 
                    function(index) { 
                        var key = $(this).parent().parent().text().hashCode();
                        var delay = {};
                        delay[key] = $(this).parent().parent().html();
                        chrome.storage.sync.set(
                            { delay }, 
                            function() {
                                console.log("La till en försening/inställt.");
                            })  
                    } )
        }, 
        500);
}

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
