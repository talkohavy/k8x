type ContextConstructorProps = {
  name: string;
  namespace: string;
};

class Context {
  Context;
  Namespace;

  constructor(props: ContextConstructorProps) {
    const { name, namespace } = props;

    this.Context = name;
    this.Namespace = namespace;
  }
}

export function contextToTable(context: string, namespace: string) {
  const contextObj = new Context({ name: context, namespace });
  const table = { Current: contextObj };

  return table;
}
