async function getdata() {

    let q = document.getElementById("query").value

    try {
        let url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${q}`

        let res = await fetch(url)

        let data = await res.json()

        let hotel = data.hotels

        console.log(hotel)

        hotel.map(function(el, index) {

            let div = document.createElement("div")

            let img = document.createElement("img")

            img.src = el.Images.two

            img.setAttribute("class", "image")

            let Title = document.createElement("h3")

            Title.innerText = el.Title

            let AC = document.createElement("h3")

            AC.innerText = `Ac : ${el.Ac}`

            let room = document.createElement("h3")

            room.innerText = `ROOMS : ${el.Rooms}`
            let rating = document.createElement("h3")

            rating.innerText = `RATING : ${el.Rating}`
            let Price = document.createElement("h3")

            Price.innerText = `PRICE : ${el.Price}`

            let btn = document.createElement("button")
            btn.innerText = "Book Now"

            // btn.onclick = function() {

            //     let obj =
            // }

            div.append(img, Title, AC, room, rating, Price, btn)

            document.getElementById("hotels_list").append(div)
        })
    } catch (err) {
        console.log(err)
    }


}


function sort_lTh() {

    window.location.href = "https://in.images.search.yahoo.com/search/images;_ylt=AwrKBAlJB8xiG3UlFWm7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=high+price+of+hotel&fr2=piv-web&type=E211IN885G0&fr=mcafee"

}


// let sorting = document.getElementById("sorting").children

// for (let el of sorting) {
//     // el.addEventListener("click" , searchdata)

//     console.log(el)
// }



function sort_HTL() {

    window.location.href = "https://in.images.search.yahoo.com/search/images;_ylt=AwrKAg2uBsxite8lq1S7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=low+price+of+hotel&fr2=piv-web&type=E211IN885G0&fr=mcafee"
}

function filter_AC() {

    window.location.href = "https://in.images.search.yahoo.com/search/images;_ylt=AwrPrnZMB8xiAmMlcDi9HAx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDcyMzAwNQRfcgMyBGFjdG4DY2xrBGNzcmNwdmlkAzliZUlxVEV3TGpLUlF2TXRZWmtQdWdFa01qUXdOUUFBQUFDNldRRmMEZnIDbWNhZmVlBGZyMgNzYS1ncARncHJpZAN5TzlIbk1IUVEyLnFURGUzcVhPT2JBBG5fc3VnZwMwBG9yaWdpbgNpbi5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAwRxc3RybAMzMARxdWVyeQNBYyUyMHJvb20lMjBwcmljZSUyMG9mJTIwaG90ZWwEdF9zdG1wAzE2NTc1Mzg0MzM-?p=Ac+room+price+of+hotel&fr=mcafee&fr2=sb-top-in.images.search&ei=UTF-8&x=wrt&type=E211IN885G0"
}


function filter_NOnNAC() {

    window.location.href = "https://in.images.search.yahoo.com/search/images;_ylt=AwrPrnaBB8xiwHAlIiG9HAx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDcyMzAwNQRfcgMyBGFjdG4DY2xrBGNzcmNwdmlkA2I0dWgyREV3TGpLUlF2TXRZWmtQdWdEaU1qUXdOUUFBQUFDOWdUaHcEZnIDbWNhZmVlBGZyMgNzYS1ncARncHJpZAM3bXkzQkpHRFJ2NlVXOURVWHFYSjFBBG5fc3VnZwMxBG9yaWdpbgNpbi5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMQRwcXN0cgNOT05BYyUyMHJvb20lMjBwcmljZSUyMG9mJTIwaG90ZWwEcHFzdHJsAzI1BHFzdHJsAzM2BHF1ZXJ5A25vbiUyMGFjJTIwcm9vbSUyMHByaWNlJTIwb2YlMjBob3RlbAR0X3N0bXADMTY1NzUzODQ3Ng--?p=non+ac+room+price+of+hotel&fr=mcafee&fr2=sa-gp-in.images.search&ei=UTF-8&x=wrt&type=E211IN885G0"
}