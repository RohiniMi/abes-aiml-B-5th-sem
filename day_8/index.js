const root = ReactDOM.createRoot(document.getElementById("root"));
const getProductsData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}

const HeaderComponent = () => {
    return (<div style={{ textAlign: "center" }}>
        <h1>E-commerce Website</h1>
    </div>)
}
const ProductComponent = ({ products }) => {
    return (<div className="prod-container">
        {products.map((product) =>
            <div>
                <img src={product.thumbnail}></img>
                <h1>{product.title}</h1>
                <h2>{product.price}</h2>
            </div>
        )}
    </div>)
}
const FooterComponent = () => {
    return (<div><h1>copyright all rights are reserved.</h1></div>)
}
const renderedFun = async () => {
    let products = await getProductsData();
    const reactElement = <>
        <HeaderComponent />
        <ProductComponent products={products}></ProductComponent>
        {FooterComponent()}
    </>
    root.render(reactElement);
}
renderedFun();