export async function fetchPerson(id) {
    const response = await fetch(`https://www.swapi.tech/api/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data from SWAPI');
    }

    const data = await response.json();
    return data.result || data;
}
