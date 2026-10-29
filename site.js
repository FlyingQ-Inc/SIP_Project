// Shared navigation across portfolio pages.
const pages=[['index.html','Home'],['sip.html','SIP'],['boards.html','Boards Overview'],['network-engineering.html','Network Engineering'],['network-security.html','Network Security'],['projects.html','Projects'],['links.html','References'],['contact.html','Contact']];
const current=location.pathname.split('/').pop()||'index.html';
const nav=document.querySelector('header nav');
if(nav){nav.setAttribute('aria-label','Main navigation');const ul=document.createElement('ul');for(const [path,label] of pages){const li=document.createElement('li'),a=document.createElement('a');a.href=path;a.textContent=label;if(path===current)a.setAttribute('aria-current','page');li.append(a);ul.append(li)}nav.replaceChildren(ul)}
