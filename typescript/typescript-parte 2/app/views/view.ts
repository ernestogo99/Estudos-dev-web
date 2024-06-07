export abstract class View<T> {
  protected elemento: HTMLElement; // só a classe view tem acesso a esse elemento,mas
  // os filhos(os que herdam) podem tocar;
  private escapar: boolean = false;
  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`o seletor ${seletor} não existe no dom,verifique `);
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }
  protected abstract template(model: T): string; // é um método que a classe filha vai implementar
  // a classe pai não sabe como é implementado
}
