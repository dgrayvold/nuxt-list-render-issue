export default defineEventHandler(event => {
    const id = getRouterParam(event, 'id');

    const parsedNumber = Number(id);

    if (isNaN(parsedNumber)) { return -1; }

    return parsedNumber;
})