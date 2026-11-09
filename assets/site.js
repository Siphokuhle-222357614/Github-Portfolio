const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const bar=document.getElementById('bar');
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
