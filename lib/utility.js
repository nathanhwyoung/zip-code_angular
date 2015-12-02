Array.prototype.diff = function(arr2) {
    var ret = [];
    this.sort();
    arr2.sort();
    for(var i = 0; i < this.length; i += 1) {
        if(arr2.indexOf( this[i] ) > -1){
            ret.push( this[i] );
        }
    }
    return ret;
};

function getMatch(array1, array2) {
    var matches = [];

    for ( var i = 0; i < array1.length; i++ ) {
        for ( var e = 0; e < array2.length; e++ ) {
            if ( array1[i].zipCode === array2[e].zipCode ) matches.push( array1[i] );
        }
    }
    return matches;
}
