import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
export function SobreNos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header com navegação */}
      <Header />

      {/* Hero Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Sobre Nós
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos uma comunidade dedicada à preservação dos recursos hídricos, 
              unindo tecnologia, educação e ação social para proteger nosso planeta azul.
            </p>
          </div>
        </div>
      </div>

      {/* Missão, Visão e Valores */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Promover a conscientização sobre a importância da preservação dos recursos hídricos 
                através de projetos educacionais, tecnológicos e comunitários que unem estudantes, 
                educadores e comunidades na proteção da água.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser uma referência estadual em educação ambiental e inovação tecnológica para 
                a preservação hídrica, formando uma geração de cidadãos conscientes e ativos 
                na proteção dos recursos naturais.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Sustentabilidade, inovação, educação, colaboração e responsabilidade social. 
                Acreditamos que cada pessoa pode fazer a diferença na preservação da água 
                e do meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nossa História */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                O projeto <strong>“Guardiões da Água”</strong> surgiu no Instituto de Educação, Ciência e Tecnologia do Maranhão (IEMA) – Unidade Rio Anil, 
                como uma iniciativa interdisciplinar que une estudantes, professores e a comunidade em torno da valorização e preservação dos recursos hídricos.
              </p>
              <p>
                Inspirado nos princípios da <em>cultura oceânica</em> e da <em>educação ambiental participativa</em>, o projeto busca reconhecer e dar visibilidade a 
                pessoas e grupos que atuam na proteção de rios, manguezais e oceanos, fortalecendo o engajamento social e a cidadania ecológica.
              </p>
              <p>
                A iniciativa resultou na criação de uma <strong>plataforma digital interativa</strong>, que reúne histórias, ações e práticas sustentáveis de 
                diferentes comunidades maranhenses, promovendo o diálogo entre saberes locais, ciência e tecnologia.
              </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
                  <div className="text-sm text-gray-600">Ano de Fundação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                  <div className="text-sm text-gray-600">Estudantes Envolvidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                  <div className="text-sm text-gray-600">Projetos Entrevistados</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipe */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600">
              Conheça as pessoas por trás dos projetos Guardiões da Água
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professor Orientador */}
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👩‍🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prof. Arthur Azevedo da Silva</h3>
              <p className="text-blue-600 font-medium mb-2">Orientadora do Projeto</p>
              <p className="text-gray-600 text-sm">
                Especialista em robótica educacional e docência do ensino superior, 
                professor do curso de Desenvolvimento de Sistemas do IEMA - Unidade Rio Anil.
              </p>
            </div>

            {/* Estudantes */}
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👩‍🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Eduane Silva
              </h3>
              <p className="text-green-600 font-medium mb-2">Co-líder do Projeto</p>
              <p className="text-gray-600 text-sm">
                Estudante do curso de Desenvolvimento de Sistemas do IEMA - Unidade Rio Anil.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👩‍🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Luísa Silva</h3>
              <p className="text-purple-600 font-medium mb-2">Co-líder do Projeto</p>
              <p className="text-gray-600 text-sm">
                Estudante do curso de Desenvolvimento de Sistemas do IEMA - Unidade Rio Anil.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impacto */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nosso Impacto</h2>
            <p className="text-xl opacity-90">
              Transformando vidas através da educação e tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-lg opacity-90">Projetos Implementados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-lg opacity-90">Comunidades Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Água Purificada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">ODS 6</div>
              <div className="text-lg opacity-90">Objetivo Alcançado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Junte-se aos Guardiões da Água
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Faça parte desta missão de preservar nossos recursos hídricos. 
            Cada ação conta, cada pessoa faz a diferença.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/artigos')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Conheça Nossos Projetos
            </button>
            <button 
              onClick={() => navigate('/')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
