//let array = [3,4,6,2,3,645,2,3,6,83,23,13];
function binary_search(arr, key) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;

    try {
        arr.forEach(element => {
            console.log(typeof element)
            if (typeof element === "string") 
               throw "error invalid type";
        });

        while(low <= high){
            mid = Math.floor((high + low) / 2)
            if(arr[mid] == key){
                return arr[mid];
            }else if(key > arr[mid]){
            low = mid + 1;  
            }else {
                high = mid - 1; 
            }
        }
        let sorted = array.sort(function(a,b) {
            return a-b;
        });

        if(binary_s(arr, key)) {
            console.log('Match Found');
            return 'Match Found';
        }else {
            console.log('Not found');
            return '404 Not found';
        }

    }catch(e) {
        return e;
    }
    
}
module.exports = binary_search