export default async function Groups({params}: {params: {id: string}}) {
    const {id} = await params
    return <h1>Hello world! {id}</h1>;
}