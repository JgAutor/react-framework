import "./App.css";
import Layout from './Layout/Layout';
import Hero from './Hero/Hero';
import Section from './Section/Section';
import Card from './Card/Card';

function App() {
  return (
    <>
      <Layout>
        <Hero />
        
        <Section id="sobre" title="O que é Racismo?">
          <Card 
            title="Definição" 
            color="#e3f2fd"
            content="Racismo é a discriminação social baseada no conceito de que existem diferentes raças humanas e que uma é superior às outras. Esta noção tem base em diferentes motivações, especialmente a cor da pele e outros traços físicos." 
          />
          <Card 
            title="Impactos" 
            color="#fce4ec"
            content="O racismo causa profundos danos psicológicos, limita oportunidades educacionais e profissionais, e perpetua desigualdades sociais e econômicas que afetam gerações." 
          />
        </Section>

        <Section id="formas" title="Formas de Racismo">
          <Card 
            title="Racismo Estrutural" 
            color="#e8f5e8"
            content="Manifesta-se em práticas institucionais, culturais e históricas que perpetuam a desigualdade racial, mesmo sem intenção discriminatória explícita." 
          />
          <Card 
            title="Racismo Institucional" 
            color="#fff3e0"
            content="Ocorre dentro de instituições e organizações quando suas políticas, procedimentos e práticas sistematicamente produzem desvantagens para alguns grupos raciais." 
          />
          <Card 
            title="Racismo Interpessoal" 
            color="#f3e5f5"
            content="Manifestações individuais de preconceito e discriminação entre pessoas, incluindo insultos, violência e tratamento diferenciado." 
          />
        </Section>

        <Section id="combate" title="Como Combater o Racismo">
          <Card 
            title="Educação" 
            color="#e1f5fe"
            content="Busque conhecimento sobre história africana e afro-brasileira, entenda os processos históricos que levaram ao racismo estrutural." 
          />
          <Card 
            title="Autocrítica" 
            color="#f1f8e9"
            content="Reconheça e questione seus próprios preconceitos e vieses inconscientes. Todos temos responsabilidade na luta antirracista." 
          />
          <Card 
            title="Ação" 
            color="#fff8e1"
            content="Denuncie situações de racismo, apoie políticas de inclusão e diversidade, e amplifique vozes racializadas." 
          />
        </Section>

        <Section id="recursos" title="Recursos e Apoio">
          <Card 
            title="Organizações" 
            color="#e8eaf6"
            content="• Educafro • Geledés • Criola • UNEGRO • MNU (Movimento Negro Unificado)" 
          />
          <Card 
            title="Canais de Denúncia" 
            color="#fce4ec"
            content="• Disque 100 • Delegacias especializadas • Ouvidorias públicas • Aplicativo Direitos Humanos BR" 
          />
          <Card 
            title="Para Estudar" 
            color="#e0f2f1"
            content="• Lei 10.639/03 (ensino da história africana) • Livros: 'Pequeno Manual Antirracista', 'Racismo Estrutural'" 
          />
        </Section>
      </Layout>
    </>
  );
}

export default App;