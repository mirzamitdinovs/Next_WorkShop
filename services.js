import axios from 'axios';

const baseUrl = 'http://94.158.54.194:9092/api';

export const FETCH_PRODUCT = async () => {
	try {
		const res = await axios.get(`${baseUrl}/product`);
		return res.data;
	} catch (err) {
		console.log('fetch products err: ', err.message);
	}
};

export const DELETE_PRODUCT = async (id) => {
	try {
		const res = await axios.delete(`${baseUrl}/product/${id}`);
		return res;
	} catch (err) {
		console.log('delete product err: ', err.message);
	}
};

export const EDIT_PRODUCT = async (product) => {
	try {
		const res = await axios.put(`${baseUrl}/product`, product);
		return res;
	} catch (err) {
		console.log('edit product err:', err.message);
	}
};

export const ADD_PRODUCT = async ({ name_uz, cost, address }) => {
	const date = new Date();
	try {
		const res = await axios.post(`${baseUrl}/product`, {
			product_type_id: 0,
			name_uz: name_uz,
			cost: cost,
			address: address,
			created_date: date.toISOString(),
		});
		return res;
	} catch (err) {
		console.log('add product err:', err.message);
	}
};
