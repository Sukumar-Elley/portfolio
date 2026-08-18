const $=s=>document.querySelector(s);
const theme=$('#theme'), menu=$('#menu'), nav=$('#nav');
if(localStorage.theme==='light')document.body.classList.add('light');
theme.onclick=()=>{document.body.classList.toggle('light');localStorage.theme=document.body.classList.contains('light')?'light':'dark'};
menu.onclick=()=>nav.classList.toggle('open');
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;$('#progress').style.width=(scrollY/h*100)+'%'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const selected=['finsecure-core','production-rag-system','Data-Leakage-Detection-System','mlops_orchestrator','healthcare-fraud-hub','graph-pulse','ecommerce-retention','Better-Fullstack','agentic-system'];
async function load(){try{const [u,r]=await Promise.all([fetch('https://api.github.com/users/Sukumar-Elley').then(x=>x.json()),fetch('https://api.github.com/users/Sukumar-Elley/repos?per_page=100&sort=updated').then(x=>x.json())]);$('#repo-count').textContent=u.public_repos??'—';$('#followers').textContent=u.followers??'—';const by=new Map(r.map(x=>[x.name,x]));const items=selected.map(n=>by.get(n)).filter(Boolean);$('#projects-grid').innerHTML=items.map(x=>`<a class="project reveal visible" href="${x.html_url}" target="_blank" rel="noreferrer"><h3>${esc(x.name)}</h3><p>${esc(x.description||'A project exploring practical software, data and AI engineering.')}</p><div class="meta"><span>${esc(x.language||'Code')}</span><span>★ ${x.stargazers_count}</span><span>↗ GitHub</span></div></a>`).join('')||'<div class="loading">Projects are temporarily unavailable.</div>'}catch(e){$('#projects-grid').innerHTML='<div class="loading">GitHub projects could not be loaded right now. Visit GitHub to explore the repositories.</div>'}}
function esc(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}load();
