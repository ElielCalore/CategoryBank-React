import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { LoggedNavbar } from "../../components/LoggedNavbar/index";
import styles from "./style.module.css"

export function PageCategory() {
	const [data, setData] = useState([{ name: "", description: "", transactions: [] }]);
	const [dataClone, setDataClone] = useState([{ name: "", description: "", transactions: [] }])
	const [searchbar, setSearchbar] = useState({ name: "" });

	useEffect(() => {
		async function Categories() {
			try {
				const response = await api.get("/category/categories");
				setData(response.data);
				setDataClone(response.data)
			} catch (error) {
				if (error) {
					return toast.error("could not load categories");
				}
			}
		}
		Categories();
	}, []);

	function handleChange(event) {

		setSearchbar({ ...searchbar, [event.target.name]: event.target.value });
		setDataClone(data.filter((current) => current.code.toLowerCase().includes(searchbar.name.toLowerCase())));
		if ((event.target.value).length < 3) {
			setDataClone(data)
		}
	}

	console.log(dataClone)

	return (
		<div>
			<LoggedNavbar />
			<Toaster />

			<h2>Categories</h2>

			<div className="d-flex">
				<Link to="/category/create">
					<button type="button">
						Create Category
					</button>
				</Link>
				<form>

				<input
					 placeholder=" search by category"
					className={styles.inputbar}
					name="name"
					type="text"
					onChange={
						handleChange}/>
			</form>
			</div>

			<table className="table">
				<thead>
					<th>Code</th>
					<th>Description</th>
					<th></th>
					<th></th> 
				</thead>
        <tbody>
				{dataClone.map((current) => {
					return (
						<tr>
							<td>
								<p>{current.code}</p>
							</td>
							<td>
								<p>{current.description}</p>
							</td>
							<td>
								<Link to={`/category/edit/${current._id}`}>
									<button>EDIT</button>
								</Link>
							</td>
							<td>
								<Link to={`/category/delete/${current._id}`}>
									<button>DELETE</button>
								</Link>
							</td>
						</tr>
					);
				})}
        </tbody>
			</table>
		</div>
	);
}
