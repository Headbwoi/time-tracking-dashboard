const btn = document.querySelectorAll(".btn")
const wrapper = document.querySelector(".wrapper")

// adds active class to each button on click and removes sctive class from others
const addActiveClass = (button) => {
  btn.forEach((b) => b.classList.remove("active"))
  button.classList.add("active")
}

// clears all cards when you click on another option
const clearActivities = () => {
  const cards = document.querySelectorAll(".info-card")
  cards.forEach((card) => card.remove())
}

// fetches data from data.json file
const getData = async () => {
  const response = fetch("data.json")
  const data = (await response).json()
  return data
}

// Update data shown in each category according to selected option
const showData = async (clickedOption) => {
  clearActivities()
  //fetches the data in this function
  const response = await getData()

  const loadTimeFrame = (option) => {
    switch (option) {
      case "daily":
        return "Yesterday"
      case "weekly":
        return "Last Week"
      case "monthly":
        return "Last Month"
    }
  }

  //handles each card creation and display
  response.forEach((info) => {
    const name = info.title //gets the title
    const cardBg = name.toLowerCase().replace(" ", "") //converts the name to lowercase and removes space
    const cardClass = name.toLowerCase().replace(" ", "-") //converts the name to lowercase and replaces space with "-" sign
    const timeFrame = info.timeframes[clickedOption] //gets the timeframe i.e current and previous
    const current = timeFrame.current //gets current data
    const previous = timeFrame.previous //gets previous data
    let currentStr = ""
    let previousStr = ""
    current > 1 ? (currentStr = "hrs") : (currentStr = "hr")
    previous > 1 ? (previousStr = "hrs") : (previousStr = "hr")
    const previousTimeFrame = loadTimeFrame(clickedOption) //calls loadTimeFrame function

    //creates the individual cards
    const card = document.createElement("div")
    card.classList.add("info-card")
    const stringToInject = `
    <div
    class="bg-${cardBg}Bg rounded-2xl h-[10.0625rem] lg:h-[15.3125rem] w-[20.625rem] lg:w-[16.125rem] relative before:absolute before:-top-[0.6rem] before:right-5 before:bg-[url('../images/icon-${cardClass}.svg')] before:bg-no-repeat before:w-20 before:h-20 before:bg-contain before:z-20 overflow-hidden"
  >
    <div
      class="bg-darkBlue absolute bottom-0 w-full h-[7.6875rem] lg:h-[12.5625rem] rounded-2xl py-7 px-6 lg:px-7 z-30 hover:bg-desaturatedBlue cursor-pointer duration-200"
    >
      <div
        class="flex items-center justify-between mb-4 md:mb-6 lg:mb-9"
      >
        <p class="text-white text-lg font-rubik font-medium">
          ${name}
        </p>
        <img
          src="images/icon-ellipsis.svg"
          alt="icon-ellipsis"
          class="cursor-pointer"
        />
      </div>
      <div
        class="flex items-center justify-between lg:flex-col lg:items-start"
      >
        <p
          class="text-white text-3xl lg:text-5xl lg:mb-4 font-rubik font-normal"
        >
          ${current}${currentStr}
        </p>
        <p
          class="text-paleBlue capitalize font-rubik font-light"
        >
          ${previousTimeFrame} - ${previous}${previousStr}
        </p>
      </div>
    </div>
  </div>
    `
    card.innerHTML = stringToInject
    wrapper.appendChild(card) //appends cards to page
  })
}

//loops through all the buttons
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    addActiveClass(btn)
    const clickedOption = btn.dataset.option
    showData(clickedOption)
  })
})

btn[1].click() //clicks on index 1(weekly) option on page load
