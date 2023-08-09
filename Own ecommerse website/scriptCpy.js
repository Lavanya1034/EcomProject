//products

let products = [
    {
      id: 1,
      type: "Car Seat",
      brand: "Britax",
      model: "B-Safe Ultra Infant Car Seat",
      weightLimit: "4-35 lbs",
      orientation: "Rear-Facing",
      price: 199.99,
      color: "Black",
      description:
        "The B-Safe Ultra is designed for safety, comfort, and easy installation. It features a steel frame, impact-absorbing base, and adjustable headrest.",
      image: "productImages/1.jpeg",
    },
    {
      id: 2,
      type: "Stroller",
      brand: "UPPAbaby",
      model: "VISTA V2 Stroller",
      weightLimit: "50 lbs",
      orientation: "N/A",
      price: 929.99,
      color: "Green",
      description:
        "The VISTA V2 is a versatile stroller with multiple configurations. It includes a reversible seat, large canopy, and one-step fold.",
      image: "productImages/2.jpeg",
    },
    {
      id: 3,
      type: "Accessories",
      brand: "Skip Hop",
      model: "Pronto Portable Changing Mat",
      weightLimit: "N/A",
      orientation: "N/A",
      price: 29.99,
      color: "Grey",
      description:
        "The Pronto Portable Changing Mat is a compact and stylish diaper changing solution with a built-in wipes case and zippered pocket.",
      image: "productImages/3.jpeg",
    },
    {
      id: 4,
      type: "Car Seat",
      brand: "Chicco",
      model: "KeyFit 30 Infant Car Seat",
      weightLimit: "4-30 lbs",
      orientation: "Rear-Facing",
      price: 199.99,
      color: "Red",
      description:
        "The KeyFit 30 is a popular infant car seat with a stay-in-car base, removable newborn insert, and energy-absorbing foam for safety.",
      image: "productImages/4.jpeg",
    },
    {
      id: 5,
      type: "Stroller",
      brand: "Baby Jogger",
      model: "City Mini GT2 Stroller",
      weightLimit: "65 lbs",
      orientation: "N/A",
      price: 399.99,
      color: "Black",
      description:
        "The City Mini GT2 is a versatile all-terrain stroller with forever air rubber tires, adjustable handlebar, and one-hand fold.",
      image: "productImages/5.jpeg",
    },
    {
      id: 6,
      type: "Car Seat",
      brand: "Graco",
      model: "4Ever DLX 4-in-1 Convertible",
      weightLimit: "4-120 lbs",
      orientation: "Rear-Facing, Forward-Facing, Booster",
      price: 299.99,
      color: "Grey",
      description:
        "The 4Ever DLX is a versatile all-in-one car seat with 10-position headrest, 6-position recline, and InRight LATCH system.",
      image: "productImages/6.jpeg",
    },
    {
      id: 7,
      type: "Stroller",
      brand: "Thule",
      model: "Urban Glide 2 Jogging Stroller",
      weightLimit: "75 lbs",
      orientation: "N/A",
      price: 479.95,
      color: "Blue",
      description:
        "The Urban Glide 2 is a high-performance jogging stroller with a lightweight design, swivel front wheel, and adjustable handlebar.",
      image: "productImages/7.jpeg",
    },
    {
      id: 8,
      type: "Accessories",
      brand: "Skip Hop",
      model: "Duo Signature Diaper Bag",
      weightLimit: "N/A",
      orientation: "N/A",
      price: 64.99,
      color: "Black",
      description:
        "The Duo Signature Diaper Bag is a stylish and functional bag with multiple pockets, changing pad, and adjustable shoulder strap.",
      image: "productImages/8.jpeg",
    },
    {
      id: 9,
      type: "Car Seat",
      brand: "Maxi-Cosi",
      model: "Pria 3-in-1 Convertible Car Seat",
      weightLimit: "4-100 lbs",
      orientation: "Rear-Facing, Forward-Facing, Booster",
      price: 349.99,
      color: "Purple",
      description:
        "The Pria 3-in-1 is a versatile convertible car seat with ClipQuik auto-magnetic chest clip and one-hand harness height adjustment.",
      image: "productImages/9.jpeg",
    },
    {
      id: 10,
      type: "Stroller",
      brand: "Bugaboo",
      model: "Bee 6 Complete Stroller",
      weightLimit: "50 lbs",
      orientation: "N/A",
      price: 799.0,
      color: "Grey",
      description:
        "The Bee 6 is a compact and lightweight stroller with one-piece fold, reversible seat, and adjustable handlebar.",
      image: "productImages/10.jpeg",
    },
  ];
  
  //-----------------------------------------------------------------------------
  //when page loads
  let allProducts = document.querySelector(".allProducts");
  let wishCartDisplay = document.querySelector(".wishCartDisplay");
  let leftWish = document.querySelector(".leftWish");
  let rightWish = document.querySelector(".rightWish");
  let wishCartDispInd = 0; //set 1 for wishlist and 2 for cart.
  
  //when any tabs are clicked
  
  let tab = document.getElementsByClassName("options");
  let tabs = Array.from(tab);
  
  window.addEventListener("load", () => {
    allProducts.style.display = "none";
    wishCartDisplay.style.display = "none";
  });
  
  //-----------------------------------------------------------------------------
  //when home is clicked
  let home = document.getElementById("home");
  home.addEventListener("click", () => {
    window.location.reload();
  });
  
  //-----------------------------------------------------------------------------
  //As of now, considered Logged in, and stored product info to pro1 storage and using same
  //if for first time, before login , products will be fetched and displayed.
  //and for each usage, the product details will be stored in seperate storage - to store
  // their wishlist, cart etc details.
  //Note : While fetching from API- this storage has to be altered
  
  let proStored = JSON.parse(window.localStorage.getItem("pro1"));
  // proStored.forEach((upd) => {
  
  //     upd.cartCountSetInd =0;
  //     console.log("zero")
  //     console.log(proStored)
  
  // });
  // window.localStorage.setItem("pro1", JSON.stringify(proStored));
  
  //array for products added to wishlist
  let productsAddedToWishList = [];
  let wishProd; //to get wish indicator flag for all products for each tabs
  
  let wishCount = document.getElementById("wishCount");
  let cartCount = document.getElementById("cartCount");
  let cartProd = []; //array for cart products
  //window.localStorage.setItem("cart4", JSON.stringify(cartProd));
  //window.localStorage.setItem("cartCount1",JSON.stringify(0))
  let cartStored = JSON.parse(window.localStorage.getItem("cart4"));
  let cCount = JSON.parse(window.localStorage.getItem("cartCount1"));
  console.log(cCount);
  cartCount.textContent = cCount; //initially zero
  
  if (cartStored.length > 0) {
    cartProd = cartStored.slice(0);
  }
  
  proStored.forEach((ele) => {
    if (ele.wishIndicator === "true") {
      productsAddedToWishList.push(ele);
    }
    wishCount.textContent = productsAddedToWishList.length;
  });
  
  //-------------------------------------------------------------------------------------
  //function to display all products
  
  function display(prods) {
    let main = document.querySelector(".main");
    main.style.display = "none";
    if (wishCartDispInd == 1 || wishCartDispInd == 2) {
      allProducts.style.display = "none";
      wishCartDisplay.style.display = "flex";
    } else {
      wishCartDisplay.style.display = "none";
      allProducts.style.display = "flex";
    }
  
    let contents = "";
    prods.forEach((element) => {
      let individual = "";
      individual = `<div class="pds"><i class="fa-solid fa-heart wishListProd"></i><img id="proImg" src="${element.image}"/>
      <h1>Type : ${element.type} </h1>
      <h3>${element.id} </h3>
      <h2>Brand : ${element.brand}</h2>
      <h3>Model : ${element.model}</h3>
      <h3>Weight Limit : ${element.weightLimit}</h3>
      <h3>Orientation : ${element.orientation}</h3>
      <h3>Price : ${element.price}</h3>
      <h3>Color : ${element.color}</h3>
      <h3>Description : ${element.description}</h3>
      <button class="addToCart">Add to Cart</button></div>`;
      contents += individual;
    });
    return contents;
  }
  //----------------------------------------------------------------------------
  
  //function to update wishlist indicator and also its cart
  
  function wishListUpdate(wishProdsUp) {
    //--------when wishlist symbol is clicked for a product
    wishProdsUp.forEach((wishProEle, index) => {
      wishProEle.addEventListener("click", () => {
        let par = wishProEle.parentElement;
  
        wishProEle.classList.toggle("wishListColor"); //if wishlist is click,change color
  
        proStored.forEach((ele) => {
          //find that parent element for wishlist icon and update indicator to false if unclicked
          if (ele.id == par.children[3].textContent) {
            if (!wishProEle.classList.contains("wishListColor")) {
              ele.wishIndicator = "false";
              //to remove that element from wishlist array
              productsAddedToWishList.forEach((remElem, index) => {
                if (remElem.id == ele.id) {
                  productsAddedToWishList.splice(index, 1);
                }
              });
            } else {
              ele.wishIndicator = "true";
              productsAddedToWishList.push(ele);
            }
            wishCount.textContent = productsAddedToWishList.length;
          }
        });
        window.localStorage.setItem("pro1", JSON.stringify(proStored));
      });
    });
  }
  
  //----------------------------------------------------------------------------
  //function to set wish (heart) indicator to red
  
  function wishIndicatorset(prodWishListOn) {
    //when a product is added to wishlist
    wishProd = document.querySelectorAll(".wishListProd");
    let wishIndicator;
    //display wishlist added products during display
    prodWishListOn.forEach((ele, index) => {
      if (ele.wishIndicator === "true") {
        if (!wishProd[index].classList.contains("wishListColor")) {
          wishProd[index].classList.add("wishListColor");
        }
      } else {
        ele.wishIndicator = "false";
      }
    });
    //call function to update the wishlist array and wishlist button colour for that product.
    wishListUpdate(wishProd);
  }
  //--------------------------------------------------------------------------------
  function cartCountSet(prdToCart, newFlag) {
    proStored.forEach((pd) => {
      if (pd.id === prdToCart.id) {
        console.log(prdToCart.id)
        console.log(newFlag);
        console.log(pd.id);
        newFlag ? (pd.cartCountSetInd = 1) : (pd.cartCountSetInd += 1);
        console.log(pd.cartCountSetInd);
      }
    });
    console.log(proStored);
    window.localStorage.setItem("pro1", JSON.stringify(proStored));
  }
  //--------------------------------------------------------------------------------
  
  function priceTotal(productPrice) {
    let price = 0;
    let shipAmt = 0;
    let taxAmt = 0;
    let allWishPrice = 0;
    productPrice.forEach((eachPro) => {
      price += eachPro.price * eachPro.cartCountSetInd;
    });
    if (price > 0) {
      shipAmt = Math.floor(price * 0.1);
      taxAmt = Math.floor(price * 0.2);
      allWishPrice = price + shipAmt + taxAmt;
    }
    let totalPrice = `<div class="tot">
    <h1 id="wishListHead">Wishlist Summary</h1>
    <div class="priceList">
        <div class="priceHead">
          <h2>Subtotal</h2>
        </div>
        <div class="priceVal">
          <h4>$${price}</h4>
        </div>
    </div>
    <div class="priceList">
        <div class="priceHead">
          <h2>Shipping Estimate</h2>
        </div>
        <div class="priceVal">
          <h4>$${shipAmt}</h4>
        </div>
    </div>
    <div class="priceList">
        <div class="priceHead">
          <h2>Tax Estimate</h2>
        </div>
        <div class="priceVal">
          <h4>$${taxAmt}</h4>
        </div>
    </div>
    <div class="priceList">
        <div class="priceHead">
          <h2 class="priceHead">Total</h2>
        </div>
        <div class="priceVal">
          <h4>$${allWishPrice}</h4>
        </div>
    </div>
  </div>`;
    return totalPrice;
  }
  //-------------------------------------------------------------------------------
  function addToCart(cartPro) {
    console.log(cartPro);
    let addToCartPro = document.querySelectorAll(".addToCart");
  
    //the below code will execute when this function is called from option tabs(all,strolles, etc)
    addToCartPro.forEach((cartEle, index) => {
      cartEle.addEventListener("click", () => {
  
        //for wishlist addtocart, this code won't get executed as already click event is captured
        let countOfcart = 0;
        let newProAddedToCart = false;
        console.log("no");
        if (addToCartPro[index].textContent == "Add to Cart") {
          console.log(cartProd);
          cartProd.push(cartPro[index]);
          countOfcart = cartProd.length;
          cartEle.textContent = "Added to cart";
          newProAddedToCart = true;
        } else {
          countOfcart = cartProd.length + 1; //pro already in cart so count alone updated
        }
        cartCount.textContent = countOfcart;
        window.localStorage.setItem("cart4", JSON.stringify(cartProd));
        window.localStorage.setItem("cartCount1", JSON.stringify(countOfcart));
        cartCountSet(cartPro[index], newProAddedToCart);
      });
      
    });
    //for wishlist, addtocart - the below condition satisfies
    if (wishCartDispInd == 1) {
      let countOfcart = 0;
      let newProAddedToCart = false;
      if (!cartProd.includes(cartPro)) {
        cartProd.push(cartPro);
        countOfcart = cartProd.length;
        newProAddedToCart = true;
      } else {
        countOfcart = cartProd.length + 1; 
      }
      cartCount.textContent = countOfcart;
      window.localStorage.setItem("cart4", JSON.stringify(cartProd));
      window.localStorage.setItem("cartCount1", JSON.stringify(countOfcart));
      console.log("called")
      console.log(cartPro)
      
      proStored.forEach((pd1) => {
        if (pd1.id === cartPro.id) {
          
          newProAddedToCart ? (pd1.cartCountSetInd = 1) : (pd1.cartCountSetInd += 1);
          console.log(pd1.cartCountSetInd);
        }
      });
      console.log(proStored);
      window.localStorage.setItem("pro1", JSON.stringify(proStored));
    }
  }
  //--------------------------------------------------------------------------------
  //function to remove the product if trash symbol is clicked
  function trashSymbol(prodInWishList) {
    //if any product is deleted from wishlist display
    let trashSym1 = document.querySelector(".leftWish");
    let trashSym2 = trashSym1.children;
  
    let trashSym = Array.from(trashSym2);
    trashSym.forEach((elemTrash, ind) => {
      elemTrash.addEventListener("click", (event) => {
        if (
          event.target.classList.contains("wishDel") ||
          event.target.classList.contains("addToCart")
        ) {
          //when trash is clicked
          if (wishCartDispInd == 1) {
            //in wishlist page
            if (event.target.classList.contains("addToCart")) {
              //when Add to cart button is clicked from wishlist page(Mycart -addtocart is not required
              //to enabled)
              console.log(prodInWishList[ind]);
              addToCart(prodInWishList[ind]);
              console.log("returned");
            }
            proStored.forEach((upd) => {
              if (upd.id == prodInWishList[ind].id) {
                upd.wishIndicator = "false";
              }
            });
            prodInWishList.splice(ind, 1);
            wishDisplayView(prodInWishList);
            wishCount.textContent = prodInWishList.length;
            window.localStorage.setItem("pro1", JSON.stringify(proStored));
          } else if (
            wishCartDispInd == 2 &&
            event.target.classList.contains("wishDel")
          ) {
            //in My cart page
            proStored.forEach((upd) => {
              if (upd.id == prodInWishList[ind].id) {
                upd.cartCountSetInd = 0;
                console.log("zero");
                console.log(proStored);
              }
            });
            window.localStorage.setItem("pro1", JSON.stringify(proStored));
            console.log(proStored);
            prodInWishList.splice(ind, 1);
            wishDisplayView(prodInWishList);
            cartCount.textContent = prodInWishList.length;
            window.localStorage.setItem("cart4", JSON.stringify(prodInWishList));
            window.localStorage.setItem(
              "cartCount1",
              JSON.stringify(prodInWishList.length)
            );
          }
          console.log(proStored);
        }
      });
    });
  }
  //-------------------------------------------------------------------------------
  //function to dislay wishlist view
  
  function wishDisplayView(productsAddedToWishListView) {
    //This is for wishlist view
    console.log(productsAddedToWishListView);
    if (productsAddedToWishListView.length > 0) {
      allProducts.style.display = "none";
      //this is for display of wishlist block
      leftWish.innerHTML = display(productsAddedToWishListView);
      //wishIndicatorset(productsAddedToWishList);
  
      let pdsWishFirst = document.querySelector(".leftWish");
      let pdsWish0 = pdsWishFirst.children;
  
      let pdsWish1 = Array.from(pdsWish0);
  
      //let pdsWish1 = document.querySelectorAll(".pds");
      let addToCartProds = document.querySelectorAll(".addToCart");
      pdsWish1.forEach((elem, indPro) => {
        elem.classList.add("pdsWish");
        if (wishCartDispInd == 1) {
          elem.firstChild.style.visibility = "hidden";
        } else if (wishCartDispInd == 2) {
          addToCartProds[indPro].style.visibility = "hidden";
          let plusMinus = document.createElement("div");
          plusMinus.setAttribute("id", "plusMin");
          plusMinus.innerHTML = `<i class="fa-solid fa-plus plMi"></i><h1 id="val"></h1><i class="fa-solid fa-minus plMi"></i>`;
          elem.append(plusMinus);
          console.log(elem);
          console.log(indPro);
          let val = document.getElementById("val");
          console.log(productsAddedToWishListView[indPro]);
          val.textContent = productsAddedToWishListView[indPro].cartCountSetInd;
        }
        let trash = document.createElement("div");
        trash.innerHTML = `<i class="fa-solid fa-trash wishDel"></i>`;
        elem.append(trash);
      });
  
      rightWish.innerHTML = priceTotal(productsAddedToWishListView);
      if (wishCartDispInd == 2) {
        let wishListHead = document.getElementById("wishListHead");
        wishListHead.textContent = "Cart Summary";
      }
    } else {
      let main = document.querySelector(".main");
      main.style.display = "none";
      wishCartDisplay.style.display = "none";
      allProducts.style.display = "flex";
      if (wishCartDispInd == 1) {
        allProducts.innerHTML = `Wish List is empty`;
      } else {
        allProducts.innerHTML = `Cart is empty`;
      }
      allProducts.classList.add("wishEmptyDesign");
    }
    trashSymbol(productsAddedToWishListView);
  }
  
  //--------------------------------------------------------------------------------
  //when any tabs are clicked.
  
  tabs.forEach((element) => {
    element.addEventListener("click", () => {
      if (allProducts.classList.contains("wishEmptyDesign")) {
        allProducts.classList.remove("wishEmptyDesign");
      }
      let dispProd;
      wishCartDispInd = 0;
      if (element.getAttribute("id") == "allProducts") {
        dispProd = proStored;
        allProducts.innerHTML = display(proStored);
      } else {
        let filterName = element.getAttribute("id");
        let eachProducts = proStored.filter((prodDetails) => {
          let category = prodDetails.type.replace(" ", "");
          if (category.toLowerCase() == filterName) {
            return prodDetails;
          }
        });
        dispProd = eachProducts;
        allProducts.innerHTML = display(eachProducts);
      }
      //if already added to cart- change the add to cart text to "added to cart"
  
      let addToCartPro = document.querySelectorAll(".addToCart");
      console.log(dispProd);
      dispProd.forEach((ds, ind8) => {
        if (ds.cartCountSetInd > 0) {
          addToCartPro[ind8].textContent = "Added to cart";
        }
      });
      addToCart(dispProd); //to add the products added to cart
  
      wishIndicatorset(dispProd); //calling function to set wish indicator ON for products selected
  
      //---------------------------------------------------------------------
    });
  });
  
  //----------------------------------------------------------------------
  
  //when wishlist or cart is clicked
  
  let wish = document.querySelector("#wish");
  wish.addEventListener("click", () => {
    wishCartDispInd = 1; //either wishlist or my cart is clicked denotion
  
    //call function to dislay products in wishlist
    wishDisplayView(productsAddedToWishList);
  });
  
  //-----------------------------------------------------------------------------
  let cart = document.querySelector("#cart");
  cart.addEventListener("click", () => {
    wishCartDispInd = 2; //either wishlist or my cart is clicked denotion
    console.log(cartProd);
    wishDisplayView(cartProd);
  });
  