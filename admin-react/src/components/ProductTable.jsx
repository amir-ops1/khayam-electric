function ProductTable({ products, onDelete, onEdit }) {

    return (

        <table>

            <thead>

                <tr>

                    <th>عنوان</th>
                    <th>دسته بندی</th>
                    <th>برند</th>
                    <th>قیمت</th>
                    <th>امتیاز</th>

                </tr>

            </thead>

            <tbody>

                {

                    products.map(product => (

                        <tr key={product.id}>

                            <td>{product.title}</td>

                            <td>{product.category}</td>

                            <td>{product.brand}</td>

                            <td>{product.price}</td>

                            <td>{product.rating}</td>

    <td>

        <button
            onClick={() => onDelete(product.id)}
        >
            حذف
        </button>

    </td>

    <td>

    <button
        onClick={() => onEdit(product)}
    >
        ویرایش
    </button>

</td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default ProductTable;