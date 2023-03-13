let bid_list = ["1: 20"]

let current_order = bid_list.length

$("#add-bid-1").on("click", function() {
    bid_list.push(`1: ${$("#text-1").val()}`)
    render()
})

$("#add-bid-2").on("click", function() {
    bid_list.push(`2: ${$("#text-2").val()}`)
    render()
})

$("#save").on("click", function() {
    window.localStorage.clear()
    bid_list.forEach((element, index) => {
        window.localStorage.setItem(index, element)
    })
})

$("#load").on("click", function() {
    bid_list = []
    for (i in [...Array(100).keys()]) {
        if (window.localStorage.getItem(i)){
            bid_list.push(window.localStorage.getItem(i))
        }
    }
    render()
})

function render() {
    $("#bid-list").children().each(function() {
        $(this).remove()
    })

    bid_list.forEach((element) => {
        $("#bid-list").append(`<li>${element}</li>`)
    })
}

render()