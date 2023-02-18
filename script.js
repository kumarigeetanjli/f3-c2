let main=document.getElementById("api");



       
function getMenu()
{

 // (resolve,reject)=>{
  return new Promise((resolve,reject)=>{

     fetch('https://free-food-menus-api-production.up.railway.app/burgers').then((api)=>{
    

      return api.json();

        })

.then((actualdata)=>{

        
    
         for(let l=0;l<60;l++)
          {
       
         const mr=document.createElement("div");
        const data=actualdata[l];
      
         
        const sk=document.createElement("div");
      
        sk.innerHTML=`
     
      <img src=${data.img} height="100" width="150" alt="not" border="3px "  />    
     <br>
     
      <br>
      country:${data.country} 
      <br>
      cost ${data.price}
      name: ${data.name}
      
      
      `
      sk.style.borderRadius="10px";
      sk.style.height="200px";
      sk.style.width="400px";
      
    
   
    sk.style.borderColor="red"
    sk.style.display="flex";
  
    main.append(sk);
    
    }

     })
     
     resolve(obj);   
  })
}


  
 


 

    let count=0;
    let obj={};
      
  
  function takeorder(){
  

  

  return new Promise((resolve,reject)=>{
  
      fetch('https://free-food-menus-api-production.up.railway.app/burgers').then((apidata)=>{
      console.log(apidata);
      
      return apidata.json();
      
      }).then((actualdata)=>{
  
        let os={}
        k=Math.floor(Math.random()*60);
 

      console.log("getting order")
       
          const data1=actualdata[k];
          const data2=actualdata[k-2];
          const data3=actualdata[k+2];
     


     count++;
    
    
    
    

      os={
        FIRST:`${data1.name}`,
        SECOND:`${data2.name}`,
       THIRD:`${data3.name}`
         }

    
console.log(os);
      
   
  })
resolve(os);

 } )
}


  
    
    
    
  //  let count=0;
    
  
 let bk={}
   function orderPrep(){

    
      
 return new Promise((resolve,reject)=>{

    console.log("order under preparation")
    
    
    
    

      bk={
       order_status:true,
       paid:false
         }
         resolve(bk);
      
    
   }

   

 )

   }  
    
    
    
    

  
  


  let ob={}; var status;
   var counter=0;
  
 function payOrder(){


    return new Promise((resolve,reject)=>{
 


    ob={ paid:true,
     order_status:true,
    
       }
    counter++;
    status=ob.paid;
     
   resolve(ob);
      



      })}

  

getMenu()

  .then(()=>{setTimeout(takeorder(),2500)})
  .then(()=>{setTimeout(orderPrep(),1500)})
 .then(()=>{setTimeout(payOrder(),1000)})
  
