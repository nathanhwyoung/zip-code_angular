function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    return matches;
}


// Array.prototype.diff = function(arr2) {
//     var ret = [];
//     this.sort();
//     arr2.sort();
//     for(var i = 0; i < this.length; i += 1) {
//         if(arr2.indexOf( this[i] ) > -1){
//             ret.push( this[i] );
//         }
//     }
//     return ret;
// };

// Object.prototype.equals = function(x)
// {
//   var p;
//   for(p in this) {
//       if(typeof(x[p])=='undefined') {return false;}
//   }
//
//   for(p in this) {
//       if (this[p]) {
//           switch(typeof(this[p])) {
//               case 'object':
//                   if (!this[p].equals(x[p])) { return false; } break;
//               case 'function':
//                   if (typeof(x[p])=='undefined' ||
//                       (p != 'equals' && this[p].toString() != x[p].toString()))
//                       return false;
//                   break;
//               default:
//                   if (this[p] != x[p]) { return false; }
//           }
//       } else {
//           if (x[p])
//               return false;
//       }
//   }
//
//   for(p in x) {
//       if(typeof(this[p])=='undefined') {return false;}
//   }
//
//   return true;
// }
