document.getElementById('run-query').addEventListener('click', function() {
   fetch(document.getElementById('url').value)
  .then( response => response.json() )
  .then( result => {
      document.getElementById('result').innerText = JSON.stringify(result);
  }); 
});
