import React from 'react';


function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}


function Input() {
	return (
		<div>
			<h2>이벤트도배우고 간단한 이론도 배웠땅1.</h2>
			<div>
				<label htmlFor="search">search</label>
				<input type="text" id="search" />
			</div>
			<div>
				<input type="checkbox" name="stock" id="stock" />
				<label htmlFor="stock">저장된것만 보여줘</label>
			</div>
		</div>
	)
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function Table() {
	return (
		<div>
			<table>
				<caption>와 캡션이 꼭 필요한거였따니 summary는 필요없는 것이었따니 또 한번 배우고 감니다요</caption>
				<thead>
					<th>Name</th>
					<th>Price</th>
				</thead>
				<tbody>
					<tr>
						<th colSpan={2}>Fruits</th>
					</tr>
					<tr>
						<td>Apple</td>
						<td>1</td>
					</tr>
					<tr>
						<th colSpan={2}>Vegetables</th>
					</tr>
					<tr>
						<td>Spinach</td>
						<td>1</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

function Content() {
	return (
		<>
			<Input/>
			<Table/>
		</>
	)
}

function Practice(props) {
    return (
			<Content/>
    );
}

export default Practice;