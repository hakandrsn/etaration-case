
let newData = [];
export const sortedProducts = (products, sort="oldtonew") => {
    if (sort === "oldtonew") {
        newData = products.sort((a, b) => {
            const date1 = new Date(a.createdAt);
            const date2 = new Date(b.createdAt);
            return date1 - date2;
        });
    } else if (sort === "newtoold") {
        newData = products.sort((a, b) => {
            const date1 = new Date(a.createdAt);
            const date2 = new Date(b.createdAt);
            return date2 - date1;
        });
    } else if(sort === "pricelow") {
        newData = products.sort((a, b) => a.price-b.price);
    } else if(sort === "pricegiht") {
        newData = products.sort((a, b) => b.price-a.price);
    }
    return newData;
}

export const listWithBrand = (products, brand) => {
    return products.filter((product) => product.brand === brand);
}
export const listWithModel= (products, model) => {
    return products.filter((product) => product.model === model);
}
export const listWithDetail = (products, detail) => {
    const {models,brans} = detail

    return products.filter((product) => product.detail === detail);
}