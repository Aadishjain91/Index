// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.getElementById("form").addEventListener('submit',(event)=>{
    event.preventDefault();
    var name=document.getElementById("user-name").value;
    var email=document.getElementById("user-email").value;
    var message=document.getElementById("user-message").value;
    if(name.length==0 || email.length==0 || message.length==0)
    {
        alert("Please fill all the fields");
    }
    else{
      document.getElementById("form").remove(); 
      document.getElementById("subheading").remove(); 
      document.getElementById("contact-page").insertAdjacentHTML(
        "afterbegin","<p class='message'>Thank you for your message!</p>"
      );
    }
});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

