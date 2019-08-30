interface Interface {
    a:number,
    b:string
}
export default function (obj:Interface): string {
    return obj.b;
}
