var form = document.querySelector('form');

form.addEventListener('Submit',function(event){
	event.preventDefault();
	if(confirm('Submit form?')){
		this.submit();
	});
});