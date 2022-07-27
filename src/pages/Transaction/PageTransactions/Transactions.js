import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { LoggedNavbar } from "../../../components/LoggedNavbar/index";
import styles from "./style.module.css"

export function Transactions() {
	const [transactions, setTransactions] = useState([]);
	const [categories, setCategories] = useState([]);
	const [edit, setEdit] = useState(false);
	// const [ loading, setLoading ] = useState(true)

	const [searchbar, setSearchbar] = useState({ name: "" });
	const [transactionsClone, setTransactionsClone] = useState([]);

	useEffect(() => {
		async function GetData() {
			try {
				const response = await api.get("/user/profile");
				setTransactions(response.data.transactions);
				setCategories(response.data.categories);
				setTransactionsClone(response.data.transactions);
				// setLoading(false)
			} catch (error) {
				console.log(error);
			}
		}
		GetData();
	}, []);

	function handleEdit() {
		if (edit === false) {
			setEdit(true);
		} else {
			setEdit(false);
		}
	}

	function handleUpdate(e) {
		const clone = [...transactions];
		clone[e.target.id][e.target.name] = e.target.value;
		setTransactions(clone);
	}

	async function handleDelete(e) {
		try {
			const res = await api.delete(`/transaction/delete/${e.target.value}`);
			const clone = [...transactions];
			clone.splice(e.target.id, 1);
			setTransactions(clone);
		} catch (error) {
			console.log(error);
		}
	}

	async function handleSubmit() {
		for (let i = 0; i < transactions.length; i++) {
			try {
				const res = await api.patch("transaction/categorize", { ...transactions[i], transactionId: transactions[i]._id, categoryId: transactions[i].category });
			} catch (error) {
				console.log(error);
			}
		}
		handleEdit();
	}

	function handleChange(event) {
		setSearchbar({ ...searchbar, [event.target.name]: event.target.value });
		setTransactionsClone(transactions.filter((current) => current.description.toLowerCase().includes(searchbar.name.toLowerCase())));
		console.log(transactionsClone);
		if (event.target.value.length < 3) {
			setTransactionsClone(transactions);
		}
	}

	return (
		<>
			<LoggedNavbar />

			<h2>Transactions</h2>
			<div className="d-flex">
				<button onClick={handleEdit}>Edit</button>
				<Link to="/transaction/manual/create">
					<button>Add Transaction</button>
				</Link>
				<Link to="/upload-csv">
					<button>Upload CSV file</button>
				</Link>
				<form>
					<label>Search :</label>
					<input name="name" type="text" onChange={handleChange} className={styles.inputbar}/>
				</form>
			</div>

			{edit ? (
				//Edit
				<>
					<div>
						<table className="table">
							<thead>
								<th>Date</th>
								<th>Description</th>
								<th>Amount</th>
								<th>Category</th>
							</thead>
							<tbody>
								{transactionsClone.map((curr, i) => {
									return (
										<>
											<tr>
												<td>
													<p>{curr.date}</p>
												</td>
												<td>
													<input id={i} value={curr.description} name="description" type="text" onChange={handleUpdate} />
												</td>
												<td>
													<input id={i} value={curr.amount} name="amount" type="number" onChange={handleUpdate} />
												</td>
												<td>
													<select id={i} name="category" onChange={handleUpdate} defaultValue="default">
														<option disabled value="default">
															select a category
														</option>

														{categories.map((cat) => {
															return <option value={cat._id}>{cat.code}</option>;
														})}
													</select>
												</td>
												<td>
													<button id={i} value={curr._id} onClick={handleDelete}>
														delete
													</button>
												</td>
											</tr>
										</>
									);
								})}
							</tbody>
						</table>
						<button onClick={handleSubmit}>save</button>
					</div>
				</>
			) : (
				//No edition
				<>
					<div>
						<table className="table">
							<thead>
								<th>Date</th>
								<th>Description</th>
								<th>Amount</th>
								<th>Category</th>
							</thead>
							<tbody>
								{transactionsClone.map((curr, i) => {
									return (
										<>
											<tr>
												<td>
													<p>{curr.date}</p>
												</td>
												<td>
													<p>{curr.description}</p>
												</td>
												<td>
													<p>{curr.amount}</p>
												</td>
												<td>
													{curr.category ? (
														<p>
															{
																categories.filter((ele) => {
																	return ele._id === curr.category;
																})[0].code
															}
														</p>
													) : (
														<p></p>
													)}
												</td>
											</tr>
										</>
									);
								})}
							</tbody>
						</table>
					</div>
				</>
			)}
		</>
	);
}
