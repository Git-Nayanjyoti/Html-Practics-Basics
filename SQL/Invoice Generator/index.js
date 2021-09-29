const items = []

function createTable(currentTable, removeTable, diaplayButton, tableHeading, tableHeader, dataHeader, data) {
    const invoiceDiv = document.getElementById('invoice-div')
    var table = document.getElementById(removeTable)
    if (table) {
        invoiceDiv.removeChild(table)
    }
    table = document.getElementById(currentTable)
    var tr = document.createElement('TR')
    if (!table) {
        var button = document.getElementById('generate-invoice')
        button.style.setProperty('display', diaplayButton)
        var heading = document.getElementById('heading')
        heading.innerText = tableHeading
        table = document.createElement('TABLE')
        table.setAttribute('id', currentTable)
        invoiceDiv.appendChild(table)
        for (let i=0; i < tableHeader.length; i++) {
            var th = document.createElement('TH')
            th.innerHTML = tableHeader[i]
            if (i==0) {
                th.setAttribute("class", "first-column")
            }else if (i== (tableHeader.length-1)) {
                th.setAttribute("class", "last-column")
            }
            else {
                th.setAttribute("class", "center-column")
            }
            tr.appendChild(th)
        }
        table.appendChild(tr)
        tr = document.createElement('TR')
    }
    for (let i=0; i<data.length; i++) {
        for (let j=0; j<dataHeader.length; j++) {
            var td = document.createElement("TD")
            if(j==0) {
                td.setAttribute('class', 'first-column')
            }else if (j==(dataHeader.length-1)) {
                td.setAttribute('class', 'last-column')
            } else {
                td.setAttribute('class', 'center-column')
            }
            td.innerText = data[i][dataHeader[j]]
            tr.appendChild(td)
        }
        table.appendChild(tr)
        tr = document.createElement("TR")
    }
}

function addItem() {
    const itemName = document.getElementById('item-name')
    const price = document.getElementById('price')
    const discount = document.getElementById('discount')
    const error = document.getElementById('error')
    const floatRegex = /\d*(\.\d+)?$/
    var message = ""
    if (!itemName.value) {
        message += "Please enter item name."
    } else if (!price.value) {
        message += "Please enter price."
    } else if (!discount.value) {
        message += "Please enter discount."
    } else {
        if(!(price.value).match(floatRegex) || price.value < 1) {
            message += "Price should be non negative decimal number."
        }
        else if ( !(discount.value).match(floatRegex) || discount.value > 100 || discount.value < 1) {
            message += "Discount should be decimal and in between (1-100)."
        }
    }
    if (message) {
        error.innerText = message
    } else {
        error.innerText = ""
        const newItem = {
            name: itemName.value,
            price: price.value,
            discount: discount.value
        }
        currentTable = "items-table"
        removeTable = "invoice-table"
        diaplayButton = "inline-block"
        tableHeading = "All items"
        tableHeader = ["Item name", "Price (in INR)", "Discount (in %)"]
        dataHeader = ["name", "price", "discount"]
        itemName.value = ""
        price.value = ""
        discount.value = ""
        createTable(currentTable, removeTable, diaplayButton, tableHeading, tableHeader, dataHeader, [newItem])
        items.push(newItem)
    }
}

function generateInvoice () {
    const sgst = 5
    const cgst = 5
    const gst = sgst + cgst
    var totalPrice = 0
    var totalDiscount = 0
    var totalSGST = 0
    var totalCGST = 0
    var totalFinalPrice = 0
    console.log(items)
    for (let i=0; i<items.length; i++) {
        var price = +items[i].price
        var discount = +items[i].discount
        var actualPrice = price - ((price * discount) / 100)
        var finalPrice = actualPrice + ((actualPrice * gst) / 100)
        items[i].sgst = sgst
        items[i].cgst = cgst
        items[i].finalPrice = finalPrice
        totalPrice += price
        totalFinalPrice += finalPrice
        totalCGST += ((actualPrice * cgst) /100)
        totalSGST += ((actualPrice * sgst) /100)
        totalDiscount += ((price * discount) /100)
    }
    currentTable = "invoice-table"
    removeTable = "items-table"
    diaplayButton = "none"
    tableHeading = "Invoice"
    tableHeader = ["Item name", "Price (in INR)", "Discount (in %)", "SGST", "CGST", "Final Price"]
    dataHeader = ["name", "price", "discount", "sgst", "cgst", "finalPrice"]
    createTable(currentTable, removeTable, diaplayButton, tableHeading, tableHeader, dataHeader, items)
    var table = document.getElementById(currentTable)
    if (table) {
        var tr = document.createElement('TR')
        var total = ["Total", totalPrice, totalDiscount, totalSGST, totalCGST, totalFinalPrice]
        for(let i=0; i<total.length; i++) {
            var th = document.createElement('th')
            if (i==0 ){
                th.setAttribute('class','first-column')
            }else if(i==(total.length-1)) {
                th.setAttribute('class','last-column')
            }else {
                th.setAttribute('class','center-column')
            }
            th.innerText = total[i]
            tr.appendChild(th)
        }
        table.appendChild(tr)
    }
    items.length = 0
}// Good luck!