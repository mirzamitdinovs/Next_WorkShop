import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	EDIT_PRODUCT,
	FETCH_PRODUCT,
} from 'services';

const CrudPage = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [value, setValue] = useState({
		id: 0,
		product_type_id: 0,
		name_uz: '',
		cost: '',
		address: '',
		created_date: '',
	});
	useEffect(() => {
		getProducts();
	}, []);

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};

	const getProducts = async () => {
		try {
			const res = await FETCH_PRODUCT();
			if (res) {
				setProducts(res);
				setLoading(false);
			}
		} catch (err) {
			console.log('getProducts err: ', err.message);
			setLoading(false);
		}
	};

	const deleteProduct = async (id) => {
		try {
			const res = await DELETE_PRODUCT(id);
			if (res && res.status === 200) {
				setProducts([...products.filter((item) => item.id !== id)]);
			}
		} catch (err) {
			console.log('err: ', err.message);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (value.id !== 0) {
				const res = await EDIT_PRODUCT(value);
				if (res.status === 200) {
					setProducts([
						...products.map((item) => (item.id === value.id ? value : item)),
					]);
				}
			} else {
				const res = await ADD_PRODUCT({
					name_uz: value.name_uz,
					address: value.address,
					cost: value.cost,
				});
				if (res.status === 200) {
					const products = await FETCH_PRODUCT();
					setProducts(products);
				}
			}

			setValue({
				id: 0,
				product_type_id: 0,
				name_uz: '',
				cost: '',
				address: '',
				created_date: '',
			});
		} catch (err) {
			console.log('handleSubmit err: ', err.message);
		}
		console.log('hey: ', value);
	};

	if (loading) return <h4>Loading....</h4>;
	return (
		<div className='container pt-5 mt-5'>
			<div className='d-flex justify-content-center m-5'>
				<form
					onSubmit={handleSubmit}
					style={{ margin: '100px 0' }}
					className='form d-flex'
				>
					<input
						className=' flex-1'
						style={{
							border: '1px solid black',
						}}
						type='text'
						name='name_uz'
						value={value.name_uz}
						onChange={handleChange}
					/>
					<input
						className='  flex-1'
						style={{
							border: '1px solid black',
						}}
						type='number'
						name='cost'
						value={value.cost}
						onChange={handleChange}
					/>
					<input
						className='  flex-1'
						style={{
							border: '1px solid black',
						}}
						type='text'
						name='address'
						value={value.address}
						onChange={handleChange}
					/>

					<div className='btn-group'>
						<input
							onChange={() => handleChange()}
							type='submit'
							value={value.id ? 'Edit Product' : 'Add Product'}
							className='btn btn-success'
						/>
						<input
							onClick={() =>
								setValue({
									id: 0,
									product_type_id: 0,
									name_uz: '',
									cost: '',
									address: '',
									created_date: '',
								})
							}
							type='button'
							value={'Clear'}
							className='btn btn-info'
						/>
					</div>
				</form>
			</div>
			<div className='row'>
				{products?.map((item, index) => (
					<div key={index} className='team-item col-md-3'>
						<img src='assets/images/team/team1.png' alt='Team Member' />
						<div style={{ textAlign: 'center' }}>
							<h5>{item.name_uz}</h5>
							<p>{item.cost}</p>
							<p>{item.address}</p>
							<div className='btn btn-group'>
								<div className='btn btn-success' onClick={() => setValue(item)}>
									Edit
								</div>
								<div
									className='btn btn-danger'
									onClick={() => deleteProduct(item.id)}
								>
									Delete
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CrudPage;
