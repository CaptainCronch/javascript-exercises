let binary_time = 0
let linear_time = 0

function binarySearch(array, term, type = 0, timed = false){
    if (!timed){
        if (type == 0){
            return iterativeBinarySearch(array, term)
        } else if (type == 1){
            return recursiveBinarySearch(array, term)
        }
    } else {
        binary_time = 0
        if (type == 0){
            iterativeBinarySearch(array, term)
        } else if (type == 1){
            recursiveBinarySearch(array, term)
        }
        return binary_time
    }
}

function iterativeBinarySearch(array, term) {
    let low = 0
    let high = array.length - 1

    while (low <= high) {
        binary_time++
        let mid = ~~((low + high) / 2)

        if (array[mid] == term){
            return mid
        } else if (array[mid] < term) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return -1
}

function recursiveBinarySearch(array, search_term, low = 0, high = array.length - 1) {
    binary_time++
    let mid = ~~((low + high) / 2)

    if (low > high){
        return -1
    } else if (search_term == array[mid]) {
        return mid
    } else if (search_term > array[mid]) {
        return binarySearch(array, search_term, mid + 1, high)
    } else {
        return binarySearch(array, search_term, low, mid - 1)
    }
}

function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        linear_time++
        if(arr[i] === key){
            return i
        }
    }
    return -1
}