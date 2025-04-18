
  const text = document.getElementById("text");
  text.style.color = "blue"; 
  text.style.fontSize = "40px";
  text.style.fontWeight = "bold";

  const text1 =document.getElementById("text1")
  text1.style.color = "darkblue";
  text1.style.fontSize = "30px";

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('button[type="submit"]');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
  
      const name = document.getElementById('student_name').value;
      const email = document.getElementById('email').value;
  
    
      alert(`Thank you, ${name}! Your email (${email}) has been submitted.`);
  
    
      submitBtn.textContent = 'Submitted!';
      submitBtn.disabled = true;
  
      setTimeout(() => {
        submitBtn.textContent = 'Submit';
        submitBtn.disabled = false;
      }, 1500);
  
    
      form.reset();
    });
  });
  
  