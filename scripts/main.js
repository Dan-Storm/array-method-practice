const businessOutput = document.querySelector("#output");
// // console.log("businessOutput", businessOutput);

// let newYorkBusiness = businesses.filter(business => {
//   let inNewYork = false;

//   if (business.addressStateCode === "NY") {
//     inNewYork = true;
//   }
//   return inNewYork;
// });
// // console.log("newYorkBusiness", newYorkBusiness);
// // console.log();
// businesses
//   .filter(biz => biz.addressStateCode === "NY")
//   .forEach(business => {
//     // console.log("whats the business", business);
//     businessOutput.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <address>${business.addressStateCode}</address>
//     <hr>`;
//   });

// function showBusiness(business) {
//   return `<div>${business.companyName}</div>`;
// }

// let newStuff = businesses.map(showBusiness);
// businessOutput.innerHTML += newStuff.join(`<hr>`);

// ///////////////////////////////////CANDY//////////////////////////////////

// const candies = [
//   {
//     name: "Lollipop",
//     price: 2.99
//   },
//   {
//     name: "Tootsie Roll",
//     price: 3.49
//   },
//   {
//     name: "Sugar Daddy",
//     price: 3.49
//   }
// ];

// const firstCheapCandy = candies.find(candy => {
// //   console.log("candy", candy);
//   return candy.price < 2.0;
// });
// // console.log(firstCheapCandy) > { name: "Tootsie Roll", price: 1.49 };

// ///////////////////////////////RAIN///////////////////////////////////////

// // const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

// // const totalRainfall = monthlyRainfall.reduce((currentTotal, nextValue) => {
// //     console.log("currentTot", (paramater), nextValue:)
// // })

// // console.log(totalRainfall)

// // Array to contain all the big spenders
// // debugger

businesses
//filter through each business in the businesses array
  .filter(business => {

    const bigOrder = business.orders.find(order => order > 9000);
    if (bigOrder === undefined) {
      return false;
    }
    return true;
  })
  .forEach(business => {
    // console.log("whats the business", business);
    businessOutput.innerHTML += `
    <h2>"Hey Big Spender "${business.companyName}</h2>
    <hr>`;
  });
