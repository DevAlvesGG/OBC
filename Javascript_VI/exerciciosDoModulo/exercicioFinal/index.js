let transactions = []


function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transation-${id}`
    return container
}
function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.textContent = name
    return title 
}

function createTransactionAmount(amount) {
    const span = document.createElement('span')

    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    const formaterAmount = formater.format(amount)

    if (amount > 0) {
        span.textContent = `${formaterAmount} C`
        span.classList.add('credit')
    } else {
        span.textContent = `${formaterAmount} D`
        span.classList.add('debit')
    }
    return span
}

function createIditTransaction(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id
        document.querySelector('#name').value = transaction.name
        document.querySelector('#amount').value = transaction.amount
    })
    return editBtn
}

function createDeleteTransaction(id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Deletar'
    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'DELETE'
        })
        deleteBtn.parentElement.remove()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1)
        updateBalance()
    })
    return deleteBtn
}

function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createIditTransaction(transaction)
    const deleteBtn = createDeleteTransaction(transaction.id)

    container.append(title, amount, editBtn, deleteBtn)
    document.querySelector('#transactions').append(container)
}

async function saveTransaction(ev) {
    ev.preventDefault()
    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)

    if(id) {
        const response = await fetch(`http://localhost:3000/transactions/${id}`,{
            method: 'PUT',
            body: JSON.stringify({name, amount}),
            headers: {'Content-Type' : 'application/json'}
        })
        const transaction = await response.json()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1, transaction)
        document.querySelector(`#transation-${id}`).remove()
        renderTransaction(transaction)
    } else {
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({name,amount}),
            headers: {'Content-Type' : 'application/json'}
        })

        const transaction = await response.json()
        transactions.push(transaction)
        renderTransaction(transaction)
    }

    ev.target.reset()
    updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('#form').addEventListener('submit', saveTransaction)


async function fetchTransactions(){
    return await fetch('http://localhost:3000/transactions').then(res => res.json())
}

function updateBalance() {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
    const formater = Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
}

async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)