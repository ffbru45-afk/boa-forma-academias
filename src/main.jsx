import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Menu, X, Dumbbell, HeartPulse, Clock3, MapPin, Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import './style.css';

// Edite os dados abaixo com as informações oficiais da academia.
const CONFIG = {
  nome: 'BOA FORMA',
  subtitulo: 'ACADEMIAS',
  whatsapp: '', // Exemplo: 5555999999999 (somente números)
  instagram: '', // URL completa do perfil
  endereco: 'Consulte nossa localização',
  horarios: 'Entre em contato para consultar os horários',
};
const servicos = [
  { icon: Dumbbell, num: '01', titulo: 'Musculação', descricao: 'Estrutura e acompanhamento para evoluir no seu ritmo.' },
  { icon: HeartPulse, num: '02', titulo: 'Pilates', descricao: 'Movimento, mobilidade e equilíbrio para sua rotina.' },
  { icon: Clock3, num: '03', titulo: 'Seu momento', descricao: 'Uma experiência acolhedora para cuidar de você.' },
];
function App() {
  const [menuAberto, setMenuAberto] = React.useState(false);
  const whatsappLink = CONFIG.whatsapp ? 'https://wa.me/' + CONFIG.whatsapp : null;
  const fechar = () => setMenuAberto(false);
  return <>
    <header className="topo">
      <a className="marca" href="#inicio" onClick={fechar}><span className="marca-simbolo">B<span>F</span></span><span>{CONFIG.nome}<small>{CONFIG.subtitulo}</small></span></a>
      <nav className={menuAberto ? 'nav aberto' : 'nav'} aria-label="Navegação principal">
        <a href="#inicio" onClick={fechar}>Início</a><a href="#modalidades" onClick={fechar}>Modalidades</a><a href="#sobre" onClick={fechar}>Sobre nós</a><a href="#contato" onClick={fechar}>Contato</a>
      </nav>
      <a className="botao topo-cta" href="#contato">Fale conosco <ArrowUpRight size={17}/></a>
      <button className="menu-toggle" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuAberto} onClick={() => setMenuAberto(!menuAberto)}>{menuAberto ? <X/> : <Menu/>}</button>
    </header>
    <main>
      <section className="hero" id="inicio">
        <div className="hero-luz" aria-hidden="true"/><div className="hero-linhas" aria-hidden="true"/>
        <div className="hero-conteudo container"><span className="eyebrow"><span className="ponto"/> MOVIMENTO QUE TRANSFORMA</span><h1>SEU RITMO.<br/><em>SUA EVOLUÇÃO.</em></h1><p>Um espaço para fortalecer o corpo, encontrar equilíbrio e construir sua melhor rotina, um treino de cada vez.</p><div className="acoes"><a className="botao botao-claro" href="#modalidades">Conheça nossas modalidades <ArrowUpRight size={19}/></a><a className="link-texto" href="#sobre">Conheça a Boa Forma <ArrowUpRight size={17}/></a></div></div>
        <a className="descer" href="#modalidades">EXPLORE <ChevronDown size={17}/></a><span className="hero-marca" aria-hidden="true">BF</span>
      </section>
      <section className="faixa" aria-label="Valores"><div>ENERGIA <span>✳</span> MOVIMENTO <span>✳</span> EQUILÍBRIO <span>✳</span> EVOLUÇÃO <span>✳</span> BOA FORMA</div></section>
      <section className="secao container" id="modalidades"><div className="secao-cabecalho"><div><span className="eyebrow escuro">O QUE FAZEMOS</span><h2>ENCONTRE O SEU <em>MOVIMENTO.</em></h2></div><p>Escolha a modalidade que combina com os seus objetivos e com a sua rotina.</p></div><div className="grade-servicos">{servicos.map(({icon:Icon,num,titulo,descricao})=><article className="servico" key={num}><div className="servico-topo"><Icon size={31} strokeWidth={1.5}/><span>{num} / 03</span></div><div><h3>{titulo}</h3><p>{descricao}</p></div><a href="#contato" aria-label={'Saiba mais sobre '+titulo}><ArrowUpRight size={23}/></a></article>)}</div></section>
      <section className="sobre" id="sobre"><div className="container sobre-grid"><div className="sobre-grafico" aria-hidden="true"><span>BF</span><div className="anel anel-um"/><div className="anel anel-dois"/></div><div className="sobre-texto"><span className="eyebrow">MUITO ALÉM DO TREINO</span><h2>UM ESPAÇO PARA <em>EVOLUIR.</em></h2><p>Na Boa Forma Academias, acreditamos no poder do movimento para transformar a rotina. Cada conquista importa, e cada pessoa tem seu próprio caminho.</p><a className="botao botao-claro" href="#contato">Venha conhecer <ArrowUpRight size={18}/></a></div></div></section>
      <section className="secao container contato" id="contato"><span className="eyebrow escuro">VAMOS CONVERSAR?</span><h2>O PRÓXIMO PASSO <em>COMEÇA AQUI.</em></h2><p>Quer conhecer nossas modalidades, horários e estrutura? Entre em contato com a equipe.</p><div className="contato-grade"><div className="info"><Clock3/><div><strong>Horários</strong><span>{CONFIG.horarios}</span></div></div><div className="info"><MapPin/><div><strong>Localização</strong><span>{CONFIG.endereco}</span></div></div><div className="info"><MessageCircle/><div><strong>Atendimento</strong><span>Fale com nossa equipe</span></div></div></div><div className="acoes">{whatsappLink ? <a className="botao botao-escuro" href={whatsappLink} target="_blank" rel="noreferrer">Conversar no WhatsApp <ArrowUpRight size={19}/></a> : <span className="aviso">Adicione o número oficial no arquivo src/main.jsx para ativar o WhatsApp.</span>}{CONFIG.instagram && <a className="link-texto link-escuro" href={CONFIG.instagram} target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram</a>}</div></section>
    </main><footer className="rodape"><div className="container rodape-interno"><a className="marca" href="#inicio"><span className="marca-simbolo">B<span>F</span></span><span>{CONFIG.nome}<small>{CONFIG.subtitulo}</small></span></a><span>© {new Date().getFullYear()} Boa Forma Academias. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
    {whatsappLink && <a className="whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><MessageCircle size={25}/></a>}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
