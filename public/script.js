const btn = document.querySelectorAll(".btn")


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

  let option

  const response = await getData()

  switch (option) {
    case "daily":
      previousTextValue = "Yesterday" 
      break;
    case "weekly":
      previousTextValue = "Last Week"
      break
    case "monthly":
      previousTextValue = "Last Month"
      break
  
  }
  
  response.forEach(info => {
    const title = info.title
    const timeframe = info.timeframes

      console.log(timeframe);

  })

  
}

btn.forEach(btn => {
  btn.addEventListener("click", () => {
    removeActiveClass()
    btn.classList.add("active")
    // const clickedOption = btn.target.dataset.value
    // console.log(clickedOption);
    showData()
  })
})
