export function sumPrice(items: any) {

    return items.reduce((acc: any, curr: any) => acc + (curr.idMeal * curr.qty), 0);

}