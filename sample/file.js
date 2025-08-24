const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens ☁️🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  }
];

function show(arr){
    arr.forEach(function (users){// Create card container
const card = document.createElement("div");
card.className = "card";

const img = document.createElement("img");
img.src = users.pic ;
img.alt = "Background";
img.className = "bg-img";

const blurredLayer = document.createElement("div");
blurredLayer.className = "blurred-layer";


const content = document.createElement("div");
content.className = "content";


const h3 = document.createElement("h3");
h3.textContent = users.name;

const p = document.createElement("p");
p.textContent = users.bio


content.appendChild(h3);
content.appendChild(p);


card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);


document.querySelector(".cards").appendChild(card);


    })
}
show(users);
let imp = document.querySelector(".imp");
imp.addEventListener("input", function(){
  let newuser = users.filter((users) => {
    return users.name.startsWith(imp.value);
  });
  document.querySelector(".cards").innerHTML="";
  show(newuser)
});

