fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

/**
Challenge: Get current data on a cryptocurrency from the list below
    * bitcoin
    * dogecoin
    * ethereum
    * litecoin

1. Search the API docs for an endpoint that will 
   get you the "current data for a coin"
   (https://www.coingecko.com/api/documentations/v3#/)

2. Execute a test request from the API docs and skim through 
   the data for anything that you may find interesting to use
   in the dashboard
*/
fetch("https://api.coingecko.com/api/documentations/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))