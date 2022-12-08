document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
   const number = document.querySelector('input [type="number"]').value;
   
   const xhr = new XMLHttpRequest();

   xhr.open('GET', `https://icanhazdadjoke.com/${number}`, true);

   xhr.onload = function() {
       if(this.status === 200) {
           const response = JSON.parse(this.responseText);

           let output = '';

           if(response.type === 'success') {

           }
       }
   }

   xhr.send();

   e.preventDefault();
}
