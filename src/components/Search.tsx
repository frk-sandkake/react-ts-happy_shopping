/** 
function SearchProducts() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        searchProducts(100);
    }, []);

      const searchProducts = async (title) => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        console.log(data);
        setProducts(data.Search);
      };
    return (
        <>
        <InputGroup className="mb-3">
        <Form.Control
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for product"
          aria-label="Search for product"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2"
        onClick={() => searchProducts(searchTerm)}>
          Button
        </Button>
      </InputGroup>
      </div>
        {
            products?.length > 0 ? (
                <div>
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            ) : (
                <div>
                  <h2>No products found</h2>
                </div>
              )
        }
        </>
    )
}
*/