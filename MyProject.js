
const mnuResturant =$("#mnuResturant");
const descreptioninput =$("#descreption");
const imginput =$("#imgLink");
// const add =$("div1");


var ResturantArr=[{descreption:"باستا باللحم مع الصوص الخاص ", img: src="./pexels-photo-5807019.jpeg"},
{descreption:"باستا مع صوص البيستو و المكسرات", img:"./pexels-photo-3590401.jpeg"} ,
{descreption:"باستا بالصوص الاحمر وجبنة البرميزان ", img:"./pexels-photo-5419336.jpeg"}, 
{descreption:"نودلز بالخضار ", img:"./pexels-photo-1279330.jpeg"} 
,{descreption: "فوتوشيني بالخضار وصوص البيستو ", img:"./pexels-photo-4730662.jpeg"}  
,{descreption:"باستا مع البقوليات و الجبن" , img: "./pexels-photo-6541815.jpeg"}
,{descreption:"باستا بالسجق و الصوص الاحمر",img:"./pexels-photo-1527603.jpeg"} 
,{descreption:"ترفل باستا ",img:"./pexels-photo-2773940.jpeg"}];



function randerArr(array){
  for (let i=0 ; i<array.length; i++){
    const div =$(`<div class="seconderyRsturant">
   <p>${array[i].descreption}</p>
   <img id="imgLink" src=${array[i].img}>
   </div>`);
   mnuResturant.append(div);
  }
}
randerArr(ResturantArr);

 function add(){
  const newMnu={
    descreption: descreptioninput.val(),
    img: imginput.val(),
  };
 ResturantArr.push(newMnu);
randerArr([newMnu]);}
   


function del(){
  ResturantArr = ResturantArr.filter(function(item){
    return item.descreption != descreptioninput.val();
});

mnuResturant.empty();
randerArr(ResturantArr);
}



localStorage.setItem("key", "value");
// $('mnuResturant').remove(div);

// function hideHandler(){
//   mnuResturant.hide();
//  }



 

//  function showhandler(){
//   div1.show()
//  }



// LoadProduct(div1);
// alert("تم اضافة المنتج ")
// mnuResturant();
// $('#imgLink').val(" ");
// $('#descreption').val(" ");

// function LoadProduct(mnuResturant)
// {
//     $('#mnuResturant').empty();
//     mnuResturant.forEach(function(value,index){
//         $('#mnuResturant').append('<div class="col-md-4"><div class="card" style="width: 18rem;">\
//         <img src="'+value.imgLink+'" class="card-img-top" alt="..."><div class="card-body text-center">\
//          <p class="card-text">'+value.descreption+'</p>\
//          </div></div></div>');
//     });
//     $(document).ready(function(){
//         $("#switchField1").click(function() {
//             $("#field1").toggle(50);
//         });
//     });