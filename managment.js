// Function to validate total amount input
function validateTotalAmount(amount) {
    if (!amount || amount <= 0) {
      document.getElementById("budget-error").classList.remove("hide");
      return false;
    }
    document.getElementById("budget-error").classList.add("hide");
    return true;
  }
  
  // Function to validate product title input
  function validateProductTitle(title) {
    if (!title.trim()) {
      document.getElementById("product-title-error").classList.remove("hide");
      return false;
    }
    document.getElementById("product-title-error").classList.add("hide");
    return true;
  }
  
  // Function to add expense item to the list
  function addExpenseToList(title, amount) {
    const listContainer = document.getElementById("list");
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listItem.innerHTML = `
      <p class="product-title">${title}</p>
      <p class="amount">${amount}</p>
    `;
    listContainer.appendChild(listItem);
  }
  
  // Function to update total amount, expenses, and balance
  function updateValues(totalAmount, expenses) {
    document.getElementById("amount").textContent = totalAmount;
    document.getElementById("expenditure-value").textContent = expenses;
    document.getElementById("balance").textContent = totalAmount - expenses;
  }
  
  // Event listener for submitting total amount
  document.getElementById("total-amount-button").addEventListener("click", () => {
    const totalAmountInput = document.getElementById("total-amount");
    const totalAmount = parseFloat(totalAmountInput.value);
  
    if (!validateTotalAmount(totalAmount)) return;
  
    updateValues(totalAmount, 0);
    totalAmountInput.value = "";
  });
  
  // Event listener for adding expense
  document.getElementById("check-amount").addEventListener("click", () => {
    const productTitleInput = document.getElementById("product-title");
    const userAmountInput = document.getElementById("user-amount");
    const title = productTitleInput.value;
    const amount = parseFloat(userAmountInput.value);
  
    if (!validateProductTitle(title) || !validateTotalAmount(amount)) return;
  
    const totalAmount = parseFloat(document.getElementById("amount").textContent);
    const expenses = parseFloat(document.getElementById("expenditure-value").textContent);
  
    addExpenseToList(title, amount);
    updateValues(totalAmount, expenses + amount);
  
    productTitleInput.value = "";
    userAmountInput.value = "";
  });
  