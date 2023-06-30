function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50, "next"]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}
