import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import '../components/reset.css';
import brigadeiroImage from '../assets/imgs/bolo.jpg';

// Estilização dos componentes
const Container = styled.div`
    font-family: "Roboto", sans-serif;
    background-color: #f7f3fb; /* Fundo suave */
    display: flex;
    flex-direction: column; /* Organiza o conteúdo em coluna */
    align-items: center; /* Centraliza horizontalmente */
    `;

const Header = styled.header`
    text-align: center;
    background-color: #9c27b0;
    width: 100%;
    font-family: "Abril Fatface", serif;
    margin-bottom: 20px;
    `;

const HeaderH1 = styled.h1`
    font-size: 6em; 
    color:#F5F5F5;
    `;

const HeaderP = styled.p`
    color:#F5F5F5;
    font-size: 1.5em; 
    `;


const Section = styled.section`
    margin: 20px 0;
    text-align: center; /* Centraliza o texto dentro da seção */
    `;

const Button = styled.button`
    background-color: #9c27b0; /* Rosa roxo */
    color: white;
    padding: 20px 40px;
    font-size: 1.5em;
    margin: 10px; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #8e24aa; /* Roxo mais escuro */
    }
    `;

const Input = styled.input`
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* Sombra leve */
    `;

const Lista = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap; /* Permite que os doces se ajustem em várias linhas */
    justify-content: center; /* Centraliza os doces na tela */
    `;

const ListaItem = styled.li`
    flex: 1 1 200px; /* Permite que os itens se expandam */
    margin: 20px;
    display: flex;
    flex-direction: column; /* Organiza a imagem e o texto em coluna */
    align-items: center; /* Centraliza o conteúdo do item */
    text-align: center; /* Centraliza o texto */
    border: 1px solid #e1bee7; /* Borda em tom mais claro */
    border-radius: 10px; /* Bordas arredondadas */
    padding: 15px; /* Aumenta o espaçamento interno */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra leve */
    transition: transform 0.3s; /* Efeito de transição para o hover */

    &:hover {
        transform: scale(1.05); /* Aumenta levemente o item ao passar o mouse */
    }
    `;

const Total = styled.h3`
    font-weight: bold;
    color: #9c27b0; /* Rosa roxo */
    `;

const ImagemDoce = styled.img`
    width: 300px; /* Aumente o tamanho da imagem */
    height: 320px; /* Defina uma altura fixa para manter a proporção */
    object-fit: cover; /* Cobre o espaço sem distorcer a imagem */
    margin-bottom: 10px; /* Espaçamento abaixo da imagem */ 
    `;

const NomeDoce = styled.h4`
    font-size: 2.5em; /* Aumenta o tamanho da fonte do nome do doce */
    margin: 5px 0; /* Espaçamento acima e abaixo do nome */
    color: #8e24aa; /* Roxo */
    `;


const SaborDoce = styled.p`
    color: #b45bcf;
    font-size: 1.2em;   
    `;
const PrecoDoce = styled.p`
    font-size: 1.7em;
    margin: 10px;
    `;

const Footer = styled.footer`
    text-align: center;
    margin-top: 20px;
    padding: 15px;
    background-color: #9c27b0;
    width: 100%;
    `;
const FooterP = styled.span`
    color: white;
    `;

const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinha os itens à esquerda */
    gap: 10px;
    margin-top: 10px;
    `;

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1em;
    color: #8e24aa;
    cursor: pointer;
    width: 200px; /* Largura fixa para os textos das opções */
    `;

const RadioInput = styled.input`
    accent-color: #9c27b0;
    transform: scale(1.2);
    `;

const InputContato = styled(Input)`
    border-color: #9c27b0;
    &:focus {
        border-color: #8e24aa;
        box-shadow: 0 0 5px rgba(156, 39, 176, 0.5); /* Efeito de foco */
    }
    `;

// Botão flutuante fixo com contador
const FloatingButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #9c27b0; /* Rosa roxo */
    color: white;
    padding: 15px 20px;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
        background-color: #8e24aa; /* Roxo mais escuro */
    }
    `;

const CartCount = styled.span`
    background-color:rgba(0, 0, 0, 0.3) ; /* Cor rosa para o contador */
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 16px;
    `;

const HomePage = () => {
    const doces = [
        { id: 1, nome: 'Ovo de Colher', sabor: 'doce do coco, barra de chocolate com recheio de ninho e oreo', preco: 2.00, imagem: brigadeiroImage },
        { id: 2, nome: 'Beijinho', sabor: 'Coco', preco: 2.50, imagem: brigadeiroImage },
        { id: 3, nome: 'Trufa', sabor: 'Morango', preco: 3.00, imagem: brigadeiroImage },
        { id: 5, nome: 'Cajuzinho', sabor: 'Amendoim', preco: 2.50, imagem: brigadeiroImage },
        { id: 6, nome: 'Cajuzinho', sabor: 'Amendoim', preco: 2.50, imagem: brigadeiroImage },
        { id: 7, nome: 'Cajuzinho', sabor: 'Amendoim', preco: 2.50, imagem: brigadeiroImage },
        { id: 8, nome: 'Cajuzinho', sabor: 'Amendoim', preco: 2.50, imagem: brigadeiroImage },
        { id: 9, nome: 'Cajuzinho', sabor: 'Amendoim', preco: 2.50, imagem: brigadeiroImage },
        { id: 10, nome: 'Cajuzinho', sabor: 'Amendoim', preco: 2.50, imagem: brigadeiroImage },
        { id: 11, nome: 'Cajuzinho', sabor: 'Amendoim', preco: 2.50, imagem: brigadeiroImage },
        // Adicione mais doces aqui
    ];

    const [carrinho, setCarrinho] = useState({});
    const [metodoPagamento, setMetodoPagamento] = useState('');
    const [numeroTelefone, setNumeroTelefone] = useState('');

    // Referência para a seção do carrinho
    const carrinhoRef = useRef(null);

    const adicionarDoce = (doce) => {
        setCarrinho((prevCarrinho) => {
          const novoCarrinho = { ...prevCarrinho };
          if (novoCarrinho[doce.id]) {
            novoCarrinho[doce.id] = {
              ...novoCarrinho[doce.id],
              quantidade: novoCarrinho[doce.id].quantidade + 1,
            };
          } else {
            novoCarrinho[doce.id] = { ...doce, quantidade: 1 };
          }
          return novoCarrinho;
        });
      };

    const removerDoce = (doce) => {
        setCarrinho((prevCarrinho) => {
            const novoCarrinho = { ...prevCarrinho };
            if (novoCarrinho[doce.id].quantidade > 1) {
                novoCarrinho[doce.id].quantidade = 1;
            } else {
                delete novoCarrinho[doce.id];
            }
            return novoCarrinho;
        });
    };

    const calcularTotal = () => {
        return Object.values(carrinho)
            .reduce((total, item) => total + item.preco * item.quantidade, 0)
            .toFixed(2);
    };

    const calcularQuantidadeTotal = () => {
        return Object.values(carrinho)
            .reduce((total, item) => total + item.quantidade, 0);
    };

    const handleWhatsAppRedirect = () => {
        if (Object.keys(carrinho).length === 0) {
            alert("Por favor, adicione pelo menos um doce ao carrinho para fazer o pedido.");
            return;
        }

        if (!metodoPagamento) {
            alert("Por favor, selecione um método de pagamento.");
            return;
        }

        if (!numeroTelefone) {
            alert("Por favor, insira seu número de telefone para contato.");
            return;
        }

        const pedido = Object.values(carrinho)
            .map(item => `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}`)
            .join('%0A');
        const total = calcularTotal();
        const message = `Olá, gostaria de fazer o seguinte pedido:%0A%0A${pedido}%0A%0ATotal: R$ ${total}%0A%0AMétodo de pagamento: ${metodoPagamento}%0A%0ANúmero para contato: ${numeroTelefone}`;

        window.open(`https://wa.me/5581986223012?text=${message}`, '_blank');
    };

    // Função para rolar até a seção do carrinho
    const scrollToCarrinho = () => {
        if (carrinhoRef.current) {
            carrinhoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container>
            <Header>
                <HeaderH1>Divine Sweets</HeaderH1>
                <HeaderP>Escolha seus doces favoritos abaixo:</HeaderP>
            </Header>

            <Lista>
                {doces.map(doce => (
                    <ListaItem key={doce.id}>
                        <ImagemDoce src={doce.imagem} alt={doce.nome} />
                        <NomeDoce>{doce.nome}</NomeDoce>
                        <SaborDoce>{doce.sabor}</SaborDoce>
                        <PrecoDoce>R$ {doce.preco.toFixed(2)}</PrecoDoce>
                        <Button onClick={() => adicionarDoce(doce)}>Adicionar ao Carrinho</Button>
                    </ListaItem>
                ))}
            </Lista>

            <Section ref={carrinhoRef}>
                <h2>Carrinho de Compras</h2>
                <ul>
                    {Object.values(carrinho).map(item => (
                        <li key={item.id}>
                            {item.quantidade}x {item.nome} - R$ {(item.preco * item.quantidade).toFixed(2)}
                            <Button onClick={() => removerDoce(item)}>Remover</Button>
                        </li>
                    ))}
                </ul>
                <Total>Total: R$ {calcularTotal()}</Total>
            </Section>

            <Section>
                <h2>Formas de Pagamento</h2>
                <RadioContainer>
                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="Cartão de Crédito"
                            checked={metodoPagamento === 'Cartão de Crédito'}
                            onChange={(e) => setMetodoPagamento(e.target.value)}
                        />
                        Cartão de Crédito
                    </RadioLabel>
                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="Cartão de Débito"
                            checked={metodoPagamento === 'Cartão de Débito'}
                            onChange={(e) => setMetodoPagamento(e.target.value)}
                        />
                        Cartão de Débito
                    </RadioLabel>

                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="Pix"
                            checked={metodoPagamento === 'Pix'}
                            onChange={(e) => setMetodoPagamento(e.target.value)}
                        />
                        Pix
                    </RadioLabel>
                    <RadioLabel>
                        <RadioInput
                            type="radio"
                            value="Dinheiro"
                            checked={metodoPagamento === 'Dinheiro'}
                            onChange={(e) => setMetodoPagamento(e.target.value)}
                        />
                        Dinheiro
                    </RadioLabel>
                </RadioContainer>
            </Section>

            <Section>
                <h2>Contato</h2>
                <InputContato
                    type="tel"
                    placeholder="Digite seu número de telefone"
                    value={numeroTelefone}
                    onChange={(e) => setNumeroTelefone(e.target.value)}
                />
                <Button onClick={handleWhatsAppRedirect}>Finalizar pedido no WhatsApp</Button>
            </Section>

             {/* Botão flutuante para rolar até o carrinho  */}
            <FloatingButton onClick={scrollToCarrinho}>
                🛒 <CartCount>{calcularQuantidadeTotal()}</CartCount>
            </FloatingButton>

            <Footer>
                <FooterP>Obrigado por escolher nossos doces!</FooterP>
            </Footer>
        </Container>
    );
};

export default HomePage;
