/* home slider*/
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.itemaa');
    document.getElementById('slie-aa').appendChild(lists[0]);
}
document.getElementById('previous').onclick = function(){
    let lists = document.querySelectorAll('.itemaa');
    document.getElementById('slie-aa').prepend(lists[lists.length - 1]);
}
/* home slider*/




//ratingbox

const stars = document.querySelectorAll(".stars i");

//nt
stars.forEach((star, index1) => {
    //nt
    star.addEventListener("click", () => {
        //nt
        stars.forEach((star, index2) => {

            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");


        });
    });
});
function submit() {
    window.open("https://youtu.be/p1GmFCGuVjw?si=EbQABYPVYV4wW9xR")
}
submit()
//ratingbox


