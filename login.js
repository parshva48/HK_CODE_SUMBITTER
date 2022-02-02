let puppeteer=require("puppeteer");
let codeobj=require("./codes");
//mail=tigor75221@xxyxi.com
//pass=bhaibhai48
let page="";
let browseropenpromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximised"]
})

browseropenpromise.then(function(browser){
console.log("browser opeaned");
let alltabspromise=browser.pages();
return alltabspromise;

})
.then(function(alltabs){
page=alltabs[0];
let loginpageopenpromise=page.goto("https://www.hackerrank.com/auth/login");
return loginpageopenpromise;
})
.then(function(){
  console.log("login page opened");
  let mailfeedpromise=page.type("input[name='username']","tigor75221@xxyxi.com",{ delay:1000 } );
  return mailfeedpromise;
  
})
.then(function(){
    let pwdfeedpromise=page.type("input[name='password']","bhaibhai48",{ delay: 1000 });
    return pwdfeedpromise;
})
.then(function(){
  let clickpromise=page.click("button[data-analytics='LoginPassword']");
  return clickpromise;
})
.then(function(){
  let waitandclickpromise=waitclickpromise(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
  return waitandclickpromise;
})
.then(function(){
  let waitpromise=page.waitForSelector("a[data-attr2='one-month-preparation-kit']",{visibility:true});
  return waitpromise;
})
.then(function(){
  function fn(){
    let arr=document.querySelectorAll("a[data-attr2='one-month-preparation-kit']");
    let linkarray=[];
    for(let i=0;i<arr.length;i++)
    {
      linkarray.push(arr[i].getAttribute("href"));
    }

    return linkarray;

  }
  let linkarrpromise=page.evaluate(fn);
  return linkarrpromise;

})
.then(function(arr){
 
  let questionsolvepromise=QuestionSolver(arr[0],0);
   for(let i=1;i<3;i++)
   {
     questionsolvepromise=questionsolvepromise.then(function(){
       console.log("one done");
       let qsp=QuestionSolver(arr[i],i);
       return qsp;
     })
   }
   return questionsolvepromise;
})
.then(function(){
  console.log("ALL QUESTION SOLVED");
})


function QuestionSolver(url,idx)
{
  return new Promise(function(resolve,reject){

    let fulllink="https://www.hackerrank.com/"+url;
    questionpagepromise=page.goto(fulllink);
  
    questionpagepromise.then(function(){
      let waitforclickoncheckboxpromise=waitclickpromise(".checkbox-wrap");
      return waitforclickoncheckboxpromise;
    })
    .then(function(){
      let waitforboxpromise=page.waitForSelector(".input.text-area.custominput.auto-width",{visibility:true});
      return waitforboxpromise;
    })
    .then(function(){
      console.log(idx);
      let typecodepromise=page.type(".input.text-area.custominput.auto-width",codeobj.codesarr[idx],{delay:20});
      return typecodepromise;
    })
    .then(function(){
      let ctrlpressedpromise=page.keyboard.down("Control");
      return ctrlpressedpromise;
    })
    .then(function(){
      let Apressedpromise=page.keyboard.press("a");
      return Apressedpromise;
    })
    .then(function(){
      let Xpressedpromise=page.keyboard.press("x");
      return Xpressedpromise;
    })
    .then(function(){
      let clickoneditorpromise=page.click(".lines-content.monaco-editor-background");
      return clickoneditorpromise;
    })
    .then(function(){
      let Apressedpromise=page.keyboard.press("a");
      return Apressedpromise;
    })
    .then(function(){
      let Vpressedpromise=page.keyboard.press("v");
      return Vpressedpromise;
    })
    .then(function(){
      let sumbitpromise=page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
      return sumbitpromise;
    })
    .then(function(){
      let ctrlpressedpromise=page.keyboard.up("Control");
      return ctrlpressedpromise;
    })
    .then(function(){
      let timeoutp=TimeOut();
      return timeoutp;
    })
    .then(function(){
      resolve();
    })
     

  })

}
function TimeOut(){

  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve();
    },1000)
  })
}
function waitclickpromise(attibute)
{
  return new Promise(function(resolve,reject){
    let waitpromise=page.waitForSelector(attibute,{visibility:true});
    waitpromise.then(function(){
      let clickpromise=page.click(attibute);
      return clickpromise;
    })
    .then(function(){
      resolve();
    })
    .catch(function(err){
      reject(err);
    })
  })
}
