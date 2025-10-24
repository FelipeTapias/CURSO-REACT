type VariablesType = {
    [key: string]: any;
  };

type greet<T extends VariablesType> = (value: T) => Promise<void>;

async function MyAnyValue<T extends VariablesType>(callback: greet<T>) {
    const data = { name: 'Felipe', age: 23 } as any;
    await callback(data);
}

MyAnyValue(async (value) => {
    console.log(value.name);
  });
