function loadUser() {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}
const displayUser=user=>{
    const userName=user.results[0].name;
    const gender=user.results[0].gender;
    const userImage=user.results[0].picture.large;
    document.getElementById('user-name').innerText=userName.title+' '+userName.first+' '+userName.last;
    document.getElementById('gender').innerText=gender;
    // document.getElementById('user-image').innerHTML=`
    // <img src="${userImage}" alt="">
    // `
    document.getElementById('user-image').src=userImage;
   
    
    console.log(userImage);
}


loadUser()