const Padrinho = require("../models/Padrinho");
describe("Teste da classe Pdrinho", () => {
  const padrinho1 = new Padrinho();

  test("Teste da classe Padrinho", () => {
    expect(padrinho1 instanceof Padrinho).toBe(true);
  });

  test("testa o id do padrinho", () => {
    padrinho1.id = "123";
    expect(padrinho1.id).not.toBe(123);
  });
  test("testa o nome do padrinho", () => {
    padrinho1.nomeCompleto = "{Reprograma}";
    expect(padrinho1.nomeCompleto).toBe("{Reprograma}");
  });
  test("testa o gênero da criança que deseja padrinhar", () => {
    padrinho1.escolherGenero = "menina";
    expect(padrinho1.escolherGenero).toBe("menina");
  });
;});
