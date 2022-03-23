import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Accordion } from 'react-bootstrap'

function App() {
    return (
        <Container className="App">
            <Row>
                <Col xs={9} id="areaDoMapa">
                    <canvas class="m-0" id="mapa" width="200" height="200"></canvas>
                    <canvas class="m-0" id="tabuleiro" width="200" height="200"></canvas>
                    <canvas class="m-0" id="jogadores" width="200" height="200"></canvas>
                </Col>

                <Col xs={3} id="menu" >
                    <Accordion defaultActiveKey="0" id="accordionMenuDoMestre">
                        
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <i class="far fa-map m-2"></i> Mapa
                            </Accordion.Header>
                            <Accordion.Body id="menuMapa" >

                                    <select id="seletorDeMapas" name="fundo" class="form-select mb-2" onchange="mudarMapa()">
                                        <option value="" selected disabled>Selecione um mapa</option>
                                        <option value="src/assets/fundo/01.jpg" >01</option>
                                        <option value="src/assets/fundo/02.jpg">02</option>
                                    </select>
                
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="mapaParaEsquerda()"><i class="far fa-caret-square-left"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="mapaParaDireita()"><i class="far fa-caret-square-right"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="mapaParaCima()"><i class="far fa-caret-square-up"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="mapaParaBaixo()"><i class="far fa-caret-square-down"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="mapaMenosZoom()"><i class="far fa-minus-square"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="mapaMaisZoom()"><i class="far fa-plus-square"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="rotacionarMapa()"><i class="fas fa-sync-alt"></i></button>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                    <i class="fas fa-chess-board m-2"></i> Tabuleiro
                            </Accordion.Header>
                            <Accordion.Body id="menuTabuleiro" >
                                    
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="aumentaQuadrado()"><i class="fas fa-expand-arrows-alt"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="diminuirQuadrado()"><i class="fas fa-compress-arrows-alt"></i></button>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                    <i class="fas fa-chess-pawn m-2"></i> Jogador
                            </Accordion.Header>
                            <Accordion.Body id="menuJogadores">
                                    
                                    <select id="seletorJogadores" name="jogador" class="form-select mb-2" onchange="selecionaJogador()">
                                    </select>
                
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="jogadorParaEsquerta()"><i class="fa fa-caret-left"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="jogadorParaDireita()"><i class="fa fa-caret-right"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="jogadorParaBaixo()"><i class="fa fa-caret-down"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="jogadorParaCima()"><i class="fa fa-caret-up"></i></button>
                
                                    <label for="fundos">skin</label>
                                    <select id="seletorSkin" name="skin" class="form-select mb-2" onchange="mudarSkin()">
                                        <option value="src/assets/totens/m01.png">Afogado</option>
                                        <option value="src/assets/totens/01.png" selected>Aventureiro 01</option>
                                        <option value="src/assets/totens/cavaleiro_01.png">Cavaleiro 01</option>
                                        <option value="src/assets/totens/tabaxi_01.png">Menina Gato</option>
                                    </select>
                
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="novoJogador()"><i class="fas fa-gamepad"></i></button>
                                    <button class="btn btn-outline-primary mr-1 mb-1" onclick="deletaJogador()"><i class="fas fa-ghost"></i></button>
                
                                    <input id="checkPodeMoverComMouse" type="checkbox" name="checkPodeMoverComMouse" value="false" onclick="permiteMoverComMouse()" />
                                    <label for="checkPodeMoverComMouse"> Pode Move Com Mouse</label><br/>
                

                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </Col>
            </Row>
        </Container>
  );
}



export default App;
