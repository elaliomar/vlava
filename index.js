var services=document.getElementById('Services');
var original_content =`<div>
<div class="icon"><i class="bi bi-briefcase"></i></div>
<h4 class="title"><a href="">TITLE</a></h4>
<p class="description">
 DESCRIPTION
</p>
</div>`

fetch('http://localhost:3000/services')
  .then(response => response.json())
  .then(json => {
        json.Sheet1.forEach(element => {
            var content=original_content;
            content=content.replace('TITLE',element.A)
            content=content.replace('DESCRIPTION',element.B)
            var service = document.createElement('div');
            service.innerHTML=content;
            service.className='col-lg-4 col-md-6 icon-box'
            services.appendChild(service);
        
    });
  })
