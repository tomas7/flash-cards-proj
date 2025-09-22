export default async function Page({ params } : any) {
    const { deckId } = await params;
    return (
        <div>deck number: { deckId }</div>
    );
}