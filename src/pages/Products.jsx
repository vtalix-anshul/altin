import CollectionComponent from "../components/ProductsComponents/CollectionComponent";
import HomeBanner from "../components/ProductsComponents/HomeBanner";

const Products = ()=>{
    return(<>
        <main className="products__page w-full">
             <HomeBanner />
             <CollectionComponent />
        </main>
    </>);
}

export default Products;