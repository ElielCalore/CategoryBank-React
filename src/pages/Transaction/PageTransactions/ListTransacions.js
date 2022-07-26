import { useState } from "react";
import { api } from "../../../api/api";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import styles from "./style.module.css"

//import images
import deleteicon from "../../../assets/images/delete.png"
import editicon from "../../../assets/images/edit.png"


import { LoggedNavbar } from "../../../components/LoggedNavbar";

export function ListTransactions() {

	const [transactions, setTransactions] = useState([]);
	const [categories, setCategories] = useState([]);
	const [toggle, setToggle] = useState([
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
		{ id: 0, value: true },
	]);


  useEffect(() => {
    async function GetTransactions(e) {
      try {
        const response = await api.get("/user/profile");
        setTransactions(response.data.transactions);
        setCategories(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    }
    GetTransactions();
  }, []);

  function handleDelete(e) {
    const clone = [...transactions];
    clone.splice(e.target.id, 1);
    setTransactions(clone);
  }

	useEffect(() => {
		async function GetTransactions() {
			try {
				const response = await api.get("/user/profile");
				setTransactions(response.data.transactions);
				setCategories(response.data.categories);
				console.log(response.data)
			} catch (error) {
				console.log(error);
			}
		}
		GetTransactions();
	}, []);

	function handleDelete(e) {
		const clone = [...transactions];
		clone.splice(e.target.id, 1);
		setTransactions(clone);
	}

	function handleUpdate(e) {
		if (e.target.name === "amount") {
			if (typeof Number(e.target.value) === NaN || typeof Number(e.target.value)) {
				return console.log("ERROR");
			}
		}

		const clone = [...transactions];
		clone[e.target.id][e.target.name] = e.target.value;
		setTransactions(clone);
	}

	function handleEdit(e) {
		const clone = [...toggle];
		if (toggle[e.target.id]["value"] === true) {
			clone[e.target.id]["value"] = false;
		} else {
			clone[e.target.id]["value"] = true;
		}
		console.log(clone[e.target.id]);
		setToggle(clone);
	}

	useEffect(() => {
		function createToggle(t) {
			setToggle(
				t.map((current, i) => {
					return { id: i, value: true };
				})
			);
		}
		if (transactions.length !== 0) {
			createToggle(transactions);
		}
	}, [transactions]);


	return (
		<>
			{transactions.length === 0 ? (
				<></>
			) : (
				<div className="container">
				<table className="table">
					<tr>
						<th >Date</th>
						<th>Description</th>
						<th>Amount</th>
						<th>Category (ESSA ARRAY SO TEM ID)</th>
					</tr>

					{transactions.map((current, i) => {
						// const tran = {...current, visible: true}

						return (
							<>
								{toggle[i].value === false ? (
									<>
										<tr>
											<td>
												<p>{current.date}</p>
											</td>
											<td>
												<input value={current.description} name="description" id={i} onChange={handleUpdate} />
											</td>
											<td>
												<p>{current.amount}</p>
											</td>
											<td>
												<select>
													{categories.map((cat) => {
														return <option value={cat.code}>{cat.code}</option>;
													})}
												</select>
											</td>
											<td>
												<button className={`btn btn-danger`} id={i} onClick={handleDelete}>
													<img src={deleteicon} alt="delete" className={styles.icon}/>
												</button>
											</td>

											<td>
												<button className={`btn btn-primary`} id={i} onClick={handleEdit}>
													OK
												</button>
											</td>
										</tr>
									</>
								) : (
									<>
										<tr>
											<td>
												<p>{current.date}</p>
											</td>
											<td>
												<p>{current.description}</p>
											</td>
											<td>
												<p>{current.amount}</p>
											</td>
											<td>
												<p>{current.category}</p>
											</td>
											<td>
												<p className={styles.textWhite}>aaaaa</p>
											</td>

											<td>
												<button className={`btn btn-primary ${styles.but}`} id={i} onClick={handleEdit}>
													edit
												</button>
											</td>
										</tr>
									</>
								)}
							</>
						);
					})}

					<tr>
						<td>
							<button>SAVE</button>
						</td>
					</tr>
				</table>
				</div>
			)}
		</>
	);

}
