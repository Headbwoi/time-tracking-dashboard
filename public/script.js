const btn = document.querySelectorAll(".btn")
const dailyBtn = document.querySelector(".dailyBtn")
const weeklyBtn = document.querySelector(".weeklyBtn")
const monthlyBtn = document.querySelector(".monthlyBtn")


const removeActiveClass = () => {
  btn.forEach((btn) => {
    btn.classList.remove("active")
  })
}

const getData = async () => {
  const response = fetch("data.json")
  const data = (await response).json()
  return data
}

// Update data shown in each category according to selected period
async function showData() {
  
}

dailyBtn.addEventListener("click", () => {
    removeActiveClass()
    dailyBtn.classList.add("active")
    showData()
})
weeklyBtn.addEventListener("click", () => {
    removeActiveClass()
    weeklyBtn.classList.add("active")
    showData()
})
monthlyBtn.addEventListener("click", () => {
    removeActiveClass()
    monthlyBtn.classList.add("active")
    showData()
})

/**- The text for the previous period's time should change based on the active timeframe. For Daily, it should read "Yesterday" e.g "Yesterday - 2hrs". For Weekly, it should read "Last Week" e.g. "Last Week - 32hrs". For monthly, it should read "Last Month" e.g. "Last Month - 19hrs". */