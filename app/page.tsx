import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-sm border-b border-amber-500/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-amber-500">
            Davi Rosa Gomes
          </Link>
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="#sobre"
                className="text-sm font-semibold hover:text-amber-500 transition-colors"
              >
                SOBRE MIM
              </Link>
            </li>
            <li>
              <Link
                href="#experiencias"
                className="text-sm font-semibold hover:text-amber-500 transition-colors"
              >
                EXPERIÊNCIAS
              </Link>
            </li>
            <li>
              <Link
                href="#projetos"
                className="text-sm font-semibold hover:text-amber-500 transition-colors"
              >
                PROJETOS
              </Link>
            </li>
            <li>
              <Link
                href="#contato"
                className="text-sm font-semibold hover:text-amber-500 transition-colors"
              >
                CONTATO
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        {/* Sobre Mim Section */}
        <section id="sobre" className="container mx-auto px-6 py-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 text-amber-500"
            style={{
              textShadow:
                "0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(245, 158, 11, 0.4)",
            }}
          >
            Sobre Mim
            <span
              className="block h-1 w-32 mx-auto mt-2 bg-amber-500"
              style={{ boxShadow: "0 0 10px rgba(245, 158, 11, 0.8)" }}
            ></span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div
              className="bg-[#131a2b] border border-amber-500/30 rounded-lg p-8 md:p-12"
              style={{ boxShadow: "0 0 20px rgba(245, 158, 11, 0.1)" }}
            >
              <div className="flex justify-center mb-8">
                <div
                  className="w-32 h-32 rounded-lg overflow-hidden border-2 border-amber-500/50"
                  style={{ boxShadow: "0 0 15px rgba(245, 158, 11, 0.3)" }}
                >
                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-center">
                  Olá! Meu nome é{" "}
                  <span className="text-amber-500 font-semibold">
                    Davi Rosa Gomes
                  </span>
                  , sou{" "}
                  <span className="text-amber-500 font-semibold">
                    Engenheiro de Computação
                  </span>{" "}
                  formado pelo INATEL e desenvolvedor{" "}
                  <span className="text-amber-500 font-semibold">
                    Full Stack
                  </span>
                  . Atualmente atuo como Desenvolvedor Full Stack na{" "}
                  <span className="text-amber-500 font-semibold">
                    JNJ Perfumes
                  </span>{" "}
                  e Suporte de TI na{" "}
                  <span className="text-amber-500 font-semibold">
                    Sem Limite LTDA
                  </span>
                  .
                </p>

                <p className="text-center">
                  Tenho experiência no desenvolvimento de sistemas financeiros
                  com foco em IA (LLMs), automação de processos e criação de
                  APIs. Minha trajetória inclui passagens pelo{" "}
                  <span className="text-amber-500 font-semibold">
                    Colégio Balão Mágico
                  </span>{" "}
                  e <span className="text-amber-500 font-semibold">INATEL</span>{" "}
                  (projeto Huawei), onde trabalhei com conformidade técnica e
                  instalações de RF.
                </p>

                <p className="text-center">
                  Minhas principais competências técnicas incluem{" "}
                  <span className="text-amber-500 font-semibold">
                    Java, Node.js, React/Next.js, PHP, PostgreSQL
                  </span>
                  . Sou apaixonado por Clean Architecture, SOLID e
                  microsserviços, sempre buscando criar soluções escaláveis e
                  eficientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experiências Section */}
        <section id="experiencias" className="container mx-auto px-6 py-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 text-amber-500"
            style={{
              textShadow:
                "0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(245, 158, 11, 0.4)",
            }}
          >
            Experiências
            <span
              className="block h-1 w-32 mx-auto mt-2 bg-amber-500"
              style={{ boxShadow: "0 0 10px rgba(245, 158, 11, 0.8)" }}
            ></span>
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                company: "JNJ Perfumes",
                role: "Desenvolvedor Full Stack",
                period: "12/2025 - Atual",
                tech: [
                  "Machine Learning",
                  "React",
                  "Node.js",
                  "Express",
                  "APIs",
                  "MySQL",
                  "VPS",
                ],
                description:
                  "Desenvolvimento de plataforma web e APIs para gestão financeira com integração de LLMs. Atuação na automação da análise de viabilidade de estoque, transformando processos manuais em decisões baseadas em dados.",
              },
              {
                company: "Sem Limite LTDA",
                role: "Suporte Ti II",
                period: "09/2025 - Atual",
                tech: [
                  "PHP",
                  "Delphi",
                  "SQL",
                  "APIs",
                  "JavaScript",
                  "Debugging",
                ],
                description:
                  "Desenvolvimento de soluções tecnológicas para a área financeira, conectando sistemas legados a plataformas modernas através de APIs. Atuação direta na manutenção de servidores para garantir a disponibilidade e a segurança do ambiente operacional.",
              },
              {
                company: "Colégio Balão Magico",
                role: "Desenvolvedor Full Stack",
                period: "09/2025 - 12/2025",
                tech: [
                  "Java",
                  "Spring Boot",
                  "React",
                  "PostgreSQL",
                  "Supabase",
                  "AWS",
                ],
                description:
                  "Desenvolvimento de um sistema completo de gestão escolar voltado para professores e funcionários. A solução foi projetada para a digitalização de processos internos, eliminando fluxos manuais e otimizando a rotina operacional da instituição.",
              },
              {
                company: "INATEL (Huawei)",
                role: "Estágio em Redes Móveis",
                period: "08/2022 - 08/2024",
                tech: [
                  "Redes Móveis",
                  "RF",
                  "Conformidade Técnica",
                  "Documentação Técnica",
                ],
                description:
                  "Responsável pela análise técnica e conformidade de equipamentos de radiofrequência durante o processo de instalação. Atuei na validação de parâmetros e vistorias de campo, garantindo a integridade da infraestrutura e fornecendo suporte técnico imediato para assegurar o padrão de qualidade das equipes.",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-[#131a2b] border border-amber-500/30 rounded-lg p-6 hover:border-amber-500/50 transition-all"
                style={{ boxShadow: "0 0 15px rgba(245, 158, 11, 0.05)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-amber-500">
                      {exp.company}
                    </h3>
                    <p className="text-gray-400">{exp.role}</p>
                  </div>
                  <span className="text-sm text-amber-500 font-semibold">
                    {exp.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-mono text-amber-400 border border-amber-500/20 rounded bg-amber-500/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projetos Section */}
        <section id="projetos" className="container mx-auto px-6 py-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 text-amber-500"
            style={{
              textShadow:
                "0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(245, 158, 11, 0.4)",
            }}
          >
            Projetos
            <span
              className="block h-1 w-32 mx-auto mt-2 bg-amber-500"
              style={{ boxShadow: "0 0 10px rgba(245, 158, 11, 0.8)" }}
            ></span>
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Pronus - Clínicas Fonoaudiológicas",
                tech: [
                  "Java",
                  "Spring Boot",
                  "React",
                  "PostgreSQL",
                  "Supabase",
                ],
                description:
                  "Desenvolvimento de plataforma web para automação de clínicas fonoaudiológicas, integrando gestão de agendamentos e atendimentos. Implementação de IA para análise prévia de fala e avaliação de pronúncia, otimizando o fluxo de diagnóstico clínico.",
              },
              {
                title: "Jurisdex - Processos Judiciais",
                tech: ["JavaScript", "Node.js", "Next.js", "PostgreSQL"],
                description:
                  "Plataforma Full-Stack para centralização e gestão de processos judiciais. O projeto automatiza a transição do fluxo de trabalho manual para rotinas digitais seguras, otimizando a organização jurídica para o usuário final.",
              },
              {
                title: "Previsão do Preço da Saca de Café",
                tech: ["Python", "Machine Learning"],
                description:
                  "Solução de inteligência de dados voltada ao mercado agrícola para previsão de preços. O projeto utiliza modelos de Machine Learning para analisar fatores de influência e mitigar a volatilidade, auxiliando a tomada de decisão estratégica para produtores e investidores.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-[#131a2b] border border-amber-500/30 rounded-lg p-6 hover:border-amber-500/50 transition-all hover:translate-y-[-4px]"
                style={{ boxShadow: "0 0 15px rgba(245, 158, 11, 0.05)" }}
              >
                <h3 className="text-xl font-bold text-amber-500 mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-mono text-amber-400 border border-amber-500/20 rounded bg-amber-500/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="container mx-auto px-6 py-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 text-amber-500"
            style={{
              textShadow:
                "0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(245, 158, 11, 0.4)",
            }}
          >
            Contato
            <span
              className="block h-1 w-32 mx-auto mt-2 bg-amber-500"
              style={{ boxShadow: "0 0 10px rgba(245, 158, 11, 0.8)" }}
            ></span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <div
              className="bg-[#131a2b] border border-amber-500/30 rounded-lg p-8"
              style={{ boxShadow: "0 0 20px rgba(245, 158, 11, 0.1)" }}
            >
              <p className="text-center text-gray-300 mb-8">
                Interessado em colaborar ou discutir projetos? Entre em contato
                comigo através dos canais abaixo:
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/5535998912412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg py-3 px-6 transition-all text-amber-500 hover:text-amber-400"
                  style={{ boxShadow: "0 0 10px rgba(245, 158, 11, 0.1)" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.43 5.661 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>

                <a
                  href="mailto:davirosagomes.eng@gmail.com"
                  className="flex items-center justify-center gap-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg py-3 px-6 transition-all text-amber-500 hover:text-amber-400"
                  style={{ boxShadow: "0 0 10px rgba(245, 158, 11, 0.1)" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </a>

                <a
                  href="https://www.linkedin.com/in/davirosagomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg py-3 px-6 transition-all text-amber-500 hover:text-amber-400"
                  style={{ boxShadow: "0 0 10px rgba(245, 158, 11, 0.1)" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                  LinkedIn
                </a>

                <a
                  href="https://github.com/DaviRGomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg py-3 px-6 transition-all text-amber-500 hover:text-amber-400"
                  style={{ boxShadow: "0 0 10px rgba(245, 158, 11, 0.1)" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-500/20 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Davi Rosa Gomes. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
