class Context {
  name;
  constructor(props: any) {
    const { name } = props;

    this.name = name;
  }
}

function contextToTable(context: string) {
  const contextObj = new Context({ name: context });
  const table = { 'Current context:': contextObj };

  return table;
}

export { contextToTable };
