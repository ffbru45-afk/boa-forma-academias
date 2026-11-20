import React from 'react';
import {createRoot} from 'react-dom/client';
import {Menu,X,MessageCircle,Clock3,Activity,HandHeart,Waves,Wind,Leaf,PersonStanding,Sparkles,ChevronDown} from 'lucide-react';
import './style.css';
import './pilates.css';
const WA='';
const whatsapp=WA?'https://wa.me/'+WA:null;
const photo1='https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=85';
const photo2='https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=85';
const benefits=[
[PersonStanding,'POSTURA','Fortalece a musculatura que sustenta a coluna e ajuda a melhorar a postura.'],
[HandHeart,'ALÍVIO DE DORES','Pode ajudar a aliviar alguns desconfortos musculares, conforme cada caso.'],
[Waves,'FLEXIBILIDADE','Mais amplitude de movimento, com segurança e sem impacto excessivo.'],
[Activity,'CORE FORTE','Abdômen e lombar trabalhando juntos para dar estabilidade ao corpo todo.'],
[Wind,'RESPIRAÇÃO','Movimento e respiração conectados: mais consciência corporal e relaxamento.'],
[Leaf,'PARA TODAS AS IDADES','Exercícios adaptáveis a diferentes idades e necessidades, com orientação.']
];
const steps=[['AGENDE PELO WHATSAPP','Escolha um horário para sua primeira aula e conte suas necessidades.'],['AULA EXPERIMENTAL','Conheça o studio, os aparelhos e como funciona a aula na prática.'],['MONTE SUA ROTINA','Defina sua frequência semanal e garanta o seu horário fixo.']];
const faqs=[
['Nunca fiz Pilates. Consigo acompanhar?','Sim! As aulas podem ser adaptadas ao seu nível. O instrutor orienta os movimentos e ajusta os exercícios conforme suas necessidades.'],
['Pilates ajuda com dor nas costas?','O Pilates pode ajudar a melhorar força, mobilidade e controle corporal, o que pode beneficiar algumas pessoas com dor nas costas. Se a dor persistir, procure avaliação de um profissional de saúde.'],
['Precisa agendar as aulas?','Sim. As aulas de Pilates têm horário marcado. Entre em contato com a academia para verificar a disponibilidade e reservar seu horário.'],
['O que devo vestir?','Use roupas confortáveis que permitam movimentação. Confirme com o studio se há alguma orientação específica sobre meias e acessórios.'],
['Quais são os planos e valores?','Os planos e valores devem ser consultados diretamente com a equipe da Boa Forma, que poderá informar as opções atualizadas.']
];
function Heading({tag,children}){return <><div className="kicker">{tag}</div><h2>{children}</h2></>}
function Header(){const [open,setOpen]=React.useState(false);return <header className="header"><div className="wrap navwrap"><a className="logo" href="/"><span className="logo-mark">BOA<br/><b>FORMA</b></span><small>ACADEMIAS</small></a><nav className={open?'nav open':'nav'}><a href="/">Início</a><a href="/musculacao.html">Musculação</a><a className="active" href="/pilates.html" onClick={()=>setOpen(false)}>Pilates</a><a href="#horarios" onClick={()=>setOpen(false)}>Horários</a><a href="#contato" onClick={()=>setOpen(false)}>Contato</a></nav><a className="btn navcta" href={whatsapp||'#contato'}><MessageCircle size={15}/> Fale conosco</a><button className="menu" aria-label="Abrir menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>}
function App(){return <><Header/><main className="pilates">
<section className="pilates-hero"><div className="wrap pilates-hero-grid"><div><div className="kicker">STUDIO PILATES · 6 ANOS</div><h1>PILATES</h1><h3>MOVIMENTO COM CONTROLE.<br/><em>CORPO SEM DOR.</em></h3><p>O 1º studio de Pilates de Itaara. Aulas com aparelhos e acompanhamento de perto para você ganhar postura, mobilidade e qualidade de vida.</p><div className="pilates-actions"><a className="btn" href={whatsapp||'#contato'}><MessageCircle size={17}/> Agendar aula experimental</a><a className="btn outline" href="#horarios">Ver horários</a></div></div><div className="pilates-hero-photo"><img src={photo1} alt="Ambiente ilustrativo de exercícios de Pilates"/><div className="studio-label"><strong>1º studio</strong><small>de Pilates de Itaara</small></div></div></div></section>
<section className="section wrap pilates-benefits"><Heading tag="BENEFÍCIOS">SEU CORPO <i>AGRADECE</i></Heading><p>Exercícios de baixo impacto que fortalecem, alongam e equilibram — respeitando as articulações.</p><div className="pilates-benefits-grid">{benefits.map(([Icon,t,d])=><article key={t}><div className="pilates-icon"><Icon size={22}/></div><h3>{t}</h3><p>{d}</p></article>)}</div></section>
<section className="section pilates-method"><div className="wrap pilates-method-grid"><div><Heading tag="COMO É A AULA">ATENÇÃO <i>DE PERTO</i>, DO COMEÇO AO FIM</Heading><p>As aulas acontecem nos aparelhos de Pilates, com o instrutor acompanhando cada movimento. Você evolui com segurança, no seu ritmo.</p><ul><li><Sparkles size={17}/> Exercícios adaptados ao seu corpo e ao seu objetivo</li><li><Sparkles size={17}/> Aparelhos de Pilates em um ambiente calmo e iluminado</li><li><Sparkles size={17}/> Horário fixo reservado para você</li></ul></div><img src={photo2} alt="Exercícios de Pilates em ambiente ilustrativo"/></div></section>
<section className="section wrap pilates-steps"><Heading tag="COMO COMEÇAR">SUA PRIMEIRA AULA EM 3 PASSOS</Heading><div className="pilates-steps-grid">{steps.map(([t,d],i)=><article key={t}><span className="pilates-step-number">{i+1}</span><span className="pilates-watermark">{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
<section className="section pilates-hours" id="horarios"><div className="wrap hours-grid"><div><Heading tag="HORÁRIOS">AULAS COM HORÁRIO MARCADO</Heading><p>Escolha o melhor turno para você e reserve seu horário pelo WhatsApp.</p></div><div className="hours-card"><h3><Clock3 size={20}/> SEGUNDA A SEXTA</h3><div><small>MANHÃ</small><strong>08:00 – 11:00</strong></div><div><small>TARDE E NOITE</small><strong>14:00 – 20:30</strong></div></div></div></section>
<section className="section wrap pilates-faq"><Heading tag="DÚVIDAS">PERGUNTAS FREQUENTES</Heading><div className="pilates-faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={17}/></summary><p>{a}</p></details>)}</div><a className="pilates-other" href="/musculacao.html"><span>Quer ganhar mais força também?</span><b>Conheça a Musculação →</b></a></section>
<section className="pilates-cta" id="contato"><div className="wrap lastcta-grid"><div><h2>RESERVE SUA AULA<br/>EXPERIMENTAL DE PILATES.</h2><p>Fale com a equipe para conhecer os horários disponíveis.</p></div><a className="btn black" href={whatsapp||'#contato'}><MessageCircle size={18}/> Chamar no WhatsApp</a></div></section></main><footer><div className="wrap">BOA FORMA ACADEMIAS <span>ITAARA · RS</span></div></footer>{whatsapp&&<a className="floating" href={whatsapp}><MessageCircle size={20}/> WhatsApp</a>}</>}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
