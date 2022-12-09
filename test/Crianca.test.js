const Crianca = require("../models/Crianca");
const Padrinho = require("../models/Padrinho");
describe("Teste da classe Pdrinho", () => {
  const crianca1 = new Crianca();

  test("Teste da classe Crianca", () => {
    expect(crianca1 instanceof Crianca).toBe(true);
  });

  test("testa o id da criança", () => {
    crianca1.id = "999";
    expect(crianca1.id).not.toBe(999);
  });

  const padrinho = new Padrinho("{Reprograma}", "(11) 9 9000-0000", "menina");

  test("Testa o método vincularPadrinho -> valida instância de Padrinho", () => {
    crianca1.vincularPadrinho(padrinho);
    expect(padrinho instanceof Padrinho).toBe(true);
  });

  const crianca2 = new Crianca("Luana Costa", "(17)99178-0000", "Luiz", "2 anos", "Menina", "tam 3", "20")

  test("Testa o gênero da criança", () => {
    expect(crianca2.genero).toEqual('Menina');
  });

});
