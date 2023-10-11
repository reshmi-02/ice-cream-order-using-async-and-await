let stocks={
  fruits:["grapes","banana","apple","strawberry"],
  liquid:["water","ice"],
  holder:["cone","cup","stick"],
  toppings:["chocolate","nuts"]
}

let isShopOpen=true;

function time(ms){
  return new Promise ((resolve,reject)=>{
    if(isShopOpen){
      setTimeout(resolve,ms)
    }
    else{
      reject(console.log("shop is closed"))
    }
  })
}

async function kitchen(){
  try{
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);
    

    await time()
    console.log("production started");

    await time()
    console.log("fruits has been chopped");
    
    await time(2000);
    console.log(`${stocks.liquid[0]} added`);

    await time()
    console.log("Machine started");

    await time(2000);
    console.log(`Ice cream placed on ${stocks.holder[0]}`);

    await time(2000);
    console.log(`${stocks.toppings[1]} as too added`);

  }
  catch{
    console.log("customer left");
  }
}

kitchen()

