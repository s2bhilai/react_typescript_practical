

export async function get(url: string) {
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error('Failed to fetch data.');
    }

    //With 'any' we can access any property, with 'unknown' we cannot access any property.
    const data = await response.json() as unknown;
    return data;
}