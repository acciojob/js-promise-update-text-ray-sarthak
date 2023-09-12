//your JS code here. If required.
let promise=new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("Hello, world!")
	},1000)
});
const element=document.getElementById("output");
promise.then((data)=>{
	element.innerHTML=data;
})

