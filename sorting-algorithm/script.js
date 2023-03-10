function bubbleSort(array){
    let completed = false
    let new_array = array.slice()

    while(!completed){
        completed = true
        new_array.forEach((element, index) => {
            if (new_array[index + 1] != null){
                let next = new_array[index + 1]
                if (element > next) {
                    completed = false
                    
                    new_array.splice(index, 1) // remove original
                    new_array.splice(index + 1, 0, element) // add current element after next
                }
            }
        })
    }

    return new_array
}