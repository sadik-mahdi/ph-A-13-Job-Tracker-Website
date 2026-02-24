document.getElementById("select-all").addEventListener('click',function(){
 
  const button = document.getElementById("select-all");
  button.onclick = function(){
    interviewBtn.classList.remove('bg-white', 'text-[#64748B]');
    interviewBtn.classList.add('bg-blue-700', 'text-white');
  }
  window.location.replace("index.html");

  const allJobCards = document.getElementsByClassName('job-card');
  const totalCount = allJobCards.length;
  console.log(totalCount);
})
document.getElementById("select-interview").addEventListener('click',function(){
  const button = document.getElementById("select-interview");
  button.onclick = function(){
    interviewBtn.classList.remove('bg-white', 'text-[#64748B]');
    interviewBtn.classList.add('bg-blue-700', 'text-white');
  }

  document.getElementById("job-cards").style.display = "none";
})
document.getElementById("select-rejected").addEventListener('click',function(){
  const button = document.getElementById("select-reject");
  button.onclick = function(){
    interviewBtn.classList.remove('bg-white', 'text-[#64748B]');
    interviewBtn.classList.add('bg-blue-700', 'text-white');
  }

  window.location.replace("dashboard.html");
})