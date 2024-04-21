import styles from "./style.module.scss";
import image from "../../assets/flower.png";
import { Menu } from "../Menu";
export const Projects = () => {
    const quantityImages = 10; 
    return(
        <section id="Projects" className={styles.sectionHome}>
            <Menu />
            <div className={styles.divTitleDesigner}>
                <h2 className={styles.h1}>Projetos</h2>
                <img className={styles.divImage} src={image} alt="flor" />
                </div>
            <div className={styles.divContent}>
                <div className={styles.divH3}>
                    <div className={styles.divProjects}>
                        <div className={styles.card}>
                            <div className={styles.divTitleCard}>
                                <h2  className={styles.cardA}> Portfolio</h2>
                                
                            </div>
                            <div className={styles.text}>
                                <h3 className={styles.textProject}>O projeto consiste na criação de um portfólio digital que utiliza React, JavaScript e CSS modules para proporcionar aos usuários uma plataforma interativa e atraente, permitindo que exibam e destaquem seus projetos e presença nas redes sociais.
                                </h3>
                                <div className={styles.button}>
                                    <a href="https://portfoliogit-gabrielaoliveira02.vercel.app/" target="blank" className={styles.buttonText}>ver página</a>
                                </div>
                                <div className={styles.button}>
                                    <a href="https://github.com/GabrielaOliveira02/Portfolio/tree/main" target="blank" className={styles.buttonText}>repositório</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.card}>
                            <div className={styles.divTitleCard}>
                                <h2 className={styles.cardA}>NuKenzie</h2>
                            </div>
                            <div className={styles.text}>
                                <h3 className={styles.textProject}>O projeto consiste na criação de um  sistema de controle financeiro completo, concentrado em gestão de caixa, transferências e depósitos. O projeto utiliza HTML, Sass, JavaScript e React para sua implementação.
                                </h3>
                                <div className={styles.buttonNuKenzie}>
                                    <a href="https://projeto-nu-kenzie-henna.vercel.app/" target="blank" className={styles.buttonText}>ver página</a>
                                </div>
                                <div className={styles.button}>
                                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/NuKenzie-" target="blank" className={styles.buttonText}>repositório</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.divTitleCard}>
                                <h2  className={styles.cardA}>Hamburgueria</h2>
                            </div>
                            <div className={styles.text}>
                                <h3 className={styles.textProject}>Este projeto visa simplificar a compra de produtos, permitindo que os usuários os adicionem ao carrinho, removam itens individualmente ou limpem o carrinho.Inclui também uma função de pesquisa de produtos.  Desenvolvido com HTML, Sass, JavaScript e React.
                                </h3>
                                <div className={styles.button}>
                                    <a href="https://projeto-hamburgueria-kenzie-gabrielaoliveira02.vercel.app/" target="blank" className={styles.buttonText}>ver página</a>
                                </div>
                                <div className={styles.button}>
                                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/projetoHamburgueriaKenzie" target="blank" className={styles.buttonText}>repositório</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.divTitleCard}>
                                <h2 className={styles.cardA}>KenzieHub</h2>
                            </div>
                            <div className={styles.text}>
                                <h3 className={styles.textProject}>O projeto simplifica o cadastro do usuário, oferecendo opções de curso e critérios para senha. Após o registro, os usuários podem gerenciar tecnologias e níveis de conhecimento.Tecnologias utilizadas incluem React, React Hook Form, zod, React Router Dom e Sass.
                                </h3>
                                <div className={styles.button}>
                                    <a href="https://projeto-kenzie-hub-drab.vercel.app/" target="blonk" className={styles.buttonText}>ver página</a>
                                </div>
                                <div className={styles.button}>
                                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/ProjetoKenzie-Hub" target="blank" className={styles.buttonText}>repositório</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divProjects}>
                    <div className={styles.card}>
                            <div className={styles.divTitleCard}>
                                <h2 className={styles.cardA}>KL Móveis</h2>
                                <img className={styles.divImage} src={image} alt="flor" />
                            </div>
                            <div className={styles.text}>
                                <h3 className={styles.textProject}>Aplicação imobiliária eficiente em TypeScript com TypeORM e PostgreSQL. Permite cadastro de imóveis, agendamento de visitas e gerenciamento de usuários e categorias, com autenticação segura e testes automatizados.
                                </h3>
                                <div className={styles.button}>
                                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/KlMoveis" target="blonk" className={styles.buttonText}>repositório</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.divTitleCard}>
                                <h2 className={styles.cardA}>Kenzie Buster</h2>
                                <img className={styles.divImage} src={image} alt="flor" />
                            </div>
                            <div className={styles.text}>
                                <h3 className={styles.textProject}> API em Django para gestão de vendas de filmes, abrangendo funcionalidades como criação de usuários, autenticação, relacionamentos entre usuários e filmes, operações CRUD para filmes, atualização de usuário, deleção de filme. 
                                </h3>
                                <div className={styles.button}>
                                    <a href="https://projeto-kenzie-hub-drab.vercel.app/" target="blonk" className={styles.buttonText}>repositório</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.divTitleCard}>
                                <h2 className={styles.cardA}>Api PC</h2>
                                <img className={styles.divImage} src={image} alt="flor" />
                            </div>
                            <div className={styles.text}>
                                <h3 className={styles.textProject}> API  em Typescript, com banco de dados PostgreSQL, para cadastro de clientes e contatos. Geração de relatórios e implementação de autenticação, validação de dados e tratamento de erros, visando oferecer serviço seguro e eficiente.
                                </h3>
                                <div className={styles.button}>
                                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/projetoFullstackApi" target="blonk" className={styles.buttonText}>repositório</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.divTitleCard}>
                                <h2 className={styles.cardA}>ProConnection</h2>
                            </div>
                            <div className={styles.text}>
                                <h3 className={styles.textProject}>Desenvolvimento de uma aplicação web em JavaScript, HTML e Sass para interação com o sistema de cadastro de clientes e contatos. A interface é projetada para estética e funcionalidade, priorizando uma experiência intuitiva e responsiva para o usuário.
                                </h3>
                                <div className={styles.button}>
                                    <a href="https://front-end-project-one-xi.vercel.app/" target="blonk" className={styles.buttonText}>ver página</a>
                                </div>
                                <div className={styles.button}>
                                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/Front-endProject" target="blonk" className={styles.buttonText}>repositório</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divImages}>
                    {[...Array(quantityImages)].map((index) => (
                            <img key={index} className={styles.divImage} src={image} alt="flor" />
                        ))}
                    </div>
                </div>
            </div>
    </section>
    )
}