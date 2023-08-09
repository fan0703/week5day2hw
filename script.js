
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
//task 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var( --main-bg)";
mainEl.classList.add("flex-ctr");
//task 2
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
//task 3
menuLinks.forEach((element)=>{

// for(let i = 0; i < menuLinks.length; i++){
    const a = document.createElement("a")
    a.setAttribute("href", element.href)
    a.textContent = element.text
    a.setAttribute('subLinks', element.subLinks)//why cannot show the submenu if delet this one 
    topMenuEl.appendChild(a)
 
})
// //task 4.0
const subMenuEl = document.querySelector("#sub-menu");
// // // task 4.1
subMenuEl.style.height = "100%";
// // // task 4.2
subMenuEl.style.backgroundColor = "#3da4ab";
// // // task 4.3
subMenuEl.classList.add("flex-around");
// // // task 4.4
subMenuEl.style.position = "absolute";
// // // task 4.5
subMenuEl.style.top = 0;
// // // task 5.1
const topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;

// // task 5.2
topMenuEl.addEventListener('click', function linkIsWorking(evt){
evt.preventDefault();
// buildSubMenu(menuLinks[1].subLinks)
// if(evt.target.tagName !== 'a'){  //sublinks can not if comment out this 
// return evt
//}
for(let i =0; i < topMenuLinks.length; i++){
    if(evt.target === topMenuLinks[i]){
        console.log(topMenuLinks[i].text);
        if(topMenuLinks[i].hasAttribute('class','active')){ //task 5.3
            topMenuLinks[i].classList.remove("active"); //task 5.4
            let showingSubmenu = false;
            subMenuEl.style.top = "0";
            return
        }   
    }
    // topMenuLinks[i].classList.remove("active");  //task 5.4
    if(evt.target === topMenuLinks[i]){
    topMenuLinks[i].setAttribute('class', 'active');   //task 5.5 //how to prove the "active" added succesfully
    } 
}

    if(evt.target.hasAttribute("subLinks")){ //task 5.6
      showingSubMenu = true
          //  console.log(evt.target.textContent)
          //  const subLinks = menuLinks[i].subLinks 
      menuLinks.forEach((element) => {
          // for(let i =0; i < menuLinks.length; i++){
       if(element.text === evt.target.textContent){
          buildSubMenu(element.subLinks)     //task 5.7
          function buildSubMenu(subLinks){        //task 5.8
           subMenuEl.textContent = ""
            for(let j = 0; j < subLinks.length; j++){
              const b = document.createElement("a")
              b.setAttribute("href", subLinks[j].href)
              b.textContent = subLinks[j].text
              subMenuEl.appendChild(b) 
            }
          }
        }
      })
            subMenuEl.style.top = "100%";
    }else{
            showingSubMenu === false
            subMenuEl.style.top = "0"
          }
        
 })
        

// function buildSubMenu(subLinks){        //task 5.8
    
//     subMenuEl.innerHTML = ""
//     for(let i = 0; i < subLinks.length; i++){
//         // if(evt.target === menuLinks[i]){
//         //     console.log(menuLinks[i].subLinks)
//         // }
//         let b = document.createElement("a")
//         b.setAttribute("href", subLinks[i].href)
//         b.textContent = subLinks[i].text
//         subMenuEl.appendChild(b) 
//     }
// }
// //task 6.0
const subMenuLinks = subMenuEl.querySelectorAll('a');  //task 6.0
subMenuEl.addEventListener('click', function(evt){     //task 6.1
    evt.preventDefault();
    for(let i =0; i < subMenuLinks.length; i++){
        if(evt.target === subMenuLinks[i]){
            console.log(subMenuLinks[i].text)
            let showingSubmenu = false;    
            
            // mainEl.text = subMenuLinks[i].text    //task 6.3
            return
        }
        subMenuEl.style.top = 0;
        topMenuLinks.classList.remove('active')  //task 6.2
        subLinks.forEach((element)=>{             //task 6.3
          if(element.text === evt.target.textContent){
            mainEl.text = element.text
            console.log(mainEl.text)
          }
        })
    }
  })        
// topMenuLinks.forEach((el)=>{
// el.classList.remove("active")
// }) 

// const mainEl = document.querySelector("main");

// mainEl.text = subMenuLinks[i].text   //task 6.3

